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
                this.up('#main-layout').down('[region=center]:last').destroy();
                // this.up('#main-layout').down('[region=center]:first').add({
                //     xtype: 'panel',
                //     html: 'test2' + (new Date).toJSON(),
                //     region: 'center'
                // });
                
                this.up('#main-layout').down('[region=center]:first').add({
                    xtype: 'grid',
                    columns: [
                        { width: 'auto', text: 'CardIssuer', dataIndex: 'card_issuer'},
                        { width: 'auto', text: 'CreateDate', dataIndex: 'create_date'},
                        { width: 'auto', text: 'CreateUser', dataIndex: 'create_user'},
                        { width: 'auto', text: 'Email', dataIndex: 'email'},
                        { width: 'auto', text: 'ID', dataIndex: 'id'},
                        { width: 'auto', text: 'LastLogin', dataIndex: 'last_login'},
                        { width: 'auto', text: 'PasswordLastUpdateDate', dataIndex: 'password_last_update_date'},
                        { width: 'auto', text: 'PasswordResetCount', dataIndex: 'password_reset_count'},
                        { width: 'auto', text: 'ResourceURI', dataIndex: 'resource_uri'},
                        { width: 'auto', text: 'Roles', dataIndex: 'roles'},
                        { width: 'auto', text: 'Status', dataIndex: 'status'},
                        { width: 'auto', text: 'SubscriberID', dataIndex: 'subscriber_id'},
                        { width: 'auto', text: 'SuspendReason', dataIndex: 'suspend_reason'},
                        { width: 'auto', text: 'Type', dataIndex: 'type'},
                        { width: 'auto', text: 'UpdateDate', dataIndex: 'update_date'},
                        { width: 'auto', text: 'UpdateUser', dataIndex: 'update_user'},
                        { width: 'auto', text: 'UserID', dataIndex: 'user_id'},
                        { width: 'auto', text: 'Username', dataIndex: 'username'},
                    ],
                    region: 'center',
                    store: Ext.create('SSD_Web.store.User')
                });
            }
        };
    },

    // Add My Dependency
    requires: [
        // Ext System Lib
        'Ext.window.Window',
        'Ext.form.Panel',
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'Ext.grid.Panel',

        'Ext.util.Cookies',
        'Ext.menu.*',
        'Ext.data.proxy.Rest',
        'Ext.data.*',

        // 
        'SSD_Web.view.main.Login',
        'SSD_Web.view.main.LoginController',
        'SSD_Web.view.main.LoginModel',

        //
        'SSD_Web.view.main.Home',
        'SSD_Web.view.main.HomeController',
        'SSD_Web.view.main.HomeModel',

        // 
        'SSD_Web.model.User',

        // 
        'SSD_Web.store.User',

    ]
});
