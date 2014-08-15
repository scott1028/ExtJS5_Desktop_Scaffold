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

                if(data[i].children == undefined){
                    item.handler = function(c, e){
                        console.log(c.text);
                        if(SSD_Web.menu_handle_mapping[c.text]){
                            SSD_Web.menu_handle_mapping[c.text].call(c);
                        }
                    }
                }

                output.push(item);
            }
            return output;
        };

        // menu action mapping
        SSD_Web.menu_handle_mapping = {
            User: function(){
                var target = this.up('#main-layout').down('#centerCmp');
                var target_parent = target.up();
                target.destroy();
                target_parent.add(Ext.create('SSD_Web.view.admin.User'));
            }
        };
    },

    // Add My Dependency
    requires: [
        // Ext System Lib
        'Ext.window.Window',
        'Ext.form.*',
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'Ext.grid.Panel',

        'Ext.util.Cookies',
        'Ext.menu.*',
        'Ext.data.proxy.Rest',
        'Ext.data.*',
        'Ext.grid.*',

        // 
        'SSD_Web.view.main.Login',
        'SSD_Web.view.main.LoginController',
        'SSD_Web.view.main.LoginModel',

        //
        'SSD_Web.view.main.Home',
        'SSD_Web.view.main.HomeController',
        'SSD_Web.view.main.HomeModel',

        // 
        'SSD_Web.view.admin.User',
        'SSD_Web.view.admin.UserController',
        'SSD_Web.view.admin.UserModel',

        // 
        'SSD_Web.model.User',

        // 
        'SSD_Web.store.User',

    ]
});
