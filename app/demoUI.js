/**
 * 
 * @author jskonst
 * @module demoUI
 * 
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    return function () {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        /*Инициализируем серверный модуль
        *переменная chat не используется, но может
        * быть использована для вызова серверных методов
        */
        var chat = new P.ServerModule("WSServer");

        /*
         * 
         * Объект для сохранения состояния
         * его хорошо бы инициализировать состоянием,
         * запрашиваемым, например, у датчиков или у сервера 
         */
        var buttonState = {
            state: false
        };

        
        var webSocket = null;

        /*
         * 
         * Подключаемся по webSocet'у
         * 
         */
        function addEventsListener() {
            var eventsTypes = "";
            var delimiter = "";

            if (webSocket) {
                webSocket.close();
                webSocket = null;
            }
            var wsProtocol = "ws:";
            if (window.location.protocol == 'https:')
                wsProtocol = "wss:";
            // Указываем адрес сервера (лучше явно)
            webSocket = new WebSocket(wsProtocol + "//" +
                    window.location.host +
                    window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/"))
                    + "/WSServer");
            console.log(webSocket);

            //Навешиваем обработчики событий
            
            webSocket.onopen = function () {
                P.Logger.info("onOpen");
            };

            webSocket.onerror = function () {
                P.Logger.info("onError");
            };

            /*
             * при получении сообщения,
             * разбираем Json и берем значения из получившегося объекта
             * @returns {undefined}
             */
            webSocket.onmessage = function (aEventData) {
                P.Logger.info("Got Message " + aEventData.data);
                buttonState = JSON.parse(aEventData.data);
                form.toggleButton.selected = buttonState.state
            };

            webSocket.onclose = function () {
                P.Logger.info("onClose");
            };
        }

         /*
          * Обработчик нажатия кнопки
          * при нажатии - посылаем сообщение по WS
          * Для этого объек переводим в json
          * @returns {undefined}
          */
        form.toggleButton.onActionPerformed = function () {
            if (form.toggleButton.selected) {
                buttonState.state = true;

            } else {
                buttonState.state = false;
            }
            P.Logger.info(buttonState);
            webSocket.send(JSON.stringify(buttonState));
        };


        self.show = function () {
            form.show();
            addEventsListener();
        };



        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });

        
        /*
         * Ckедующие функции не нужны и использовались только для тестов - 
         * для определения корректности отработки событий
         */
        form.btnConnect.onActionPerformed = function () {
            P.Logger.info("Opening");
            addEventsListener();
        };

        form.btnClose.onActionPerformed = function () {
            P.Logger.info("Closing");
            webSocket.close();
        };

        form.btnMessage.onActionPerformed = function () {
            P.Logger.info("Sending Message");
            webSocket.send("Send");
        };


    };
});
