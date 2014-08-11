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

        if(Ext.util.Cookies.get('logined') == 200){
            this.view.add(Ext.create('SSD_Web.view.main.Home'));

            // Ext.Ajax.setUseDefaultXhrHeader(false);

            // // send login request
            // Ext.Ajax.request({
            //     url: '/api/privilege/function_tree/',
            //     method: 'GET',
            //     success: function(response){
            //         var data = Ext.util.JSON.decode(response.responseText);
            //         var menu = SSD_Web.build_menu(data.objects);

            //         self.view.add(Ext.create('SSD_Web.view.main.Home', {
            //             tbar: menu
            //         }));
            //     },
            //     failure: function(){
            //         //
            //     }
            // });
        }
        else{
        	this.view.add(Ext.create('SSD_Web.view.main.Login'));
        };

    }
});
