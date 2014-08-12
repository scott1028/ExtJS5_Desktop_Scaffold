/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'SSD_Web',

    extend: 'SSD_Web.Application',
    
    autoCreateViewport: 'SSD_Web.view.main.Main',
    // autoCreateViewport: 'SSD_Web.view.main.Login',
    // autoCreateViewport: 'SSD_Web.view.main.Welcome',
    
    //-------------------------------------------------------------------------
    // Most customizations should be made to SSD_Web.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    init: function(){
        console.log('init');

        // ref: http://dev.sencha.com/extjs/5.0.0/examples/menu/menus.html
        // menu sub-item can not be button xtype, only root compoent is button
        SSD_Web.build_menu = function(data, child){
            if(child == undefined){
                child = false;
            }

            var output = [];
            for(var i = 0; i < data.length; i++){
                var item = {
                    text: data[i].name,
                }

                // only root is button, others is item.
                if(child == false){
                    item.xtype = 'button'
                }

                if(data[i].children != undefined && data[i].children.length > 0){
                    var tmp = SSD_Web.build_menu(data[i].children, true);
                    item.menu = tmp;
                }
                output.push(item);
            }
            return output;
        };
    },

    // Add My Dependency
    requires: [
        'Ext.window.Window',
        'Ext.form.Panel',
        'Ext.layout.container.Border',
        'Ext.tab.Panel',

        // 
        'SSD_Web.view.main.Login',
        'SSD_Web.view.main.LoginController',
        'SSD_Web.view.main.LoginModel',

        //
        'SSD_Web.view.main.Home',
        'SSD_Web.view.main.HomeController',
        'SSD_Web.view.main.HomeModel',

        // 
        'Ext.util.Cookies',
        'Ext.menu.*',
    ]
});
