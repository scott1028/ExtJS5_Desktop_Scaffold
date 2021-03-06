Ext.application({
    name: 'SSD_Web',

    autoCreateViewport: 'SSD_Web.view.main.Main',

    //
    // launch: function(){
    //     Ext.create('SSD_Web.view.main.Login', {
    //     	renderTo: Ext.getBody()
    //     });
    // }

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
                //
                Ext.getCmp('centerPanel').removeAll();
                Ext.getCmp('centerPanel').add(Ext.create('SSD_Web.view.admin.User'));
            },
            Role: function(){
                Ext.getCmp('centerPanel').removeAll();
                Ext.getCmp('centerPanel').add(Ext.create('SSD_Web.view.admin.Role'));
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

        // My own UI
        'SSD_Web.view.ux.DateTimePicker',
        
    ]
});