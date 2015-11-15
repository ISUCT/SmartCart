/**
 * Do not edit this file manually, it will be overwritten by
 * Platypus Application Designer.
 */
require(['facade'], function (F) {
    var global = this;
    //F.cacheBust(true);
    F.export(global);
    require('demoUI', function(demoUI){
        var m = new demoUI();
        m.show();
    }, function(e){
        F.Logger.severe(e);
        if(global.document){
            var messageParagraph = global.document.createElement('p');
            global.document.body.appendChild(messageParagraph);
            messageParagraph.innerHTML = 'An error occured while require(\'demoUI\'). Error: ' + e;
            messageParagraph.style.margin = '10px';
            messageParagraph.style.fontFamily = 'Arial';
            messageParagraph.style.fontSize = '14pt';
        }
    });
});