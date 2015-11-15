/**
 * 
 * @author jskonst
 * @resident
 * @constructor 
 * @public
 */
function WSServer() {
    var self = this, model = P.loadModel(this.constructor.name);
    //Мессив для хранения подключений
    var sessionStore = [];

    // при установлении подключения - сохраняем его в массиве
    self.onopen = function (session) {
        P.Logger.info("Session Opened " + session.id);
        sessionStore.push(session);
    };

    //при получении сообщения
    //перебираем всех клиентов и  пересылаем им сообщение 
    // Хорошо бы сделать так, чтобы источник не получал сообщения
    self.onmessage = function (aMessage) {
        P.Logger.info("Message " + aMessage.data);
        for (var i = 0; i < sessionStore.length; i++) {
            sessionStore[i].send(aMessage.data);
        }
    };

    self.onerror = function (aSession) {
        P.Logger.info("Error " + aSession);
    };

    // При закрытии соединения убираем из списка соответствующего клиента
    self.onclose = function (aSession) {
        P.Logger.info("Close " + aSession);
        for (var i = 0; i < sessionStore.length; i++) {
            if (sessionStore[i] == aSession) {
                sessionStore.splice(i, 1);
            }
        }
    };

    // TODO : place your code here
}
