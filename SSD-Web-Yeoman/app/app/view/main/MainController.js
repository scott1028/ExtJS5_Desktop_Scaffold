/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SSD_Web.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    init: function(){

        if(Ext.util.Cookies.get('loggedin') == 200){
            this.view.add(Ext.create('SSD_Web.view.main.Home'));
        }
        else{
        	this.view.add(Ext.create('SSD_Web.view.main.Login'));
        };

    }
});
