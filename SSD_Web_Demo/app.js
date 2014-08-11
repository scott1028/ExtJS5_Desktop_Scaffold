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

        SSD_Web.build_menu = function(data, child){
            var output = [];
            for(var i = 0; i < data.length; i++){
                var item = {
                    text: data[i].name,
                    xtype: 'button'
                }

                if(data[i].children != undefined && data[i].children.length > 0){
                    var tmp = SSD_Web.build_menu(data[i].children);
                    item.menu = tmp;
                }
                output.push(item);
            }
            return output;

            // menu = Ext.create('Ext.menu.Menu', {
            //         width: 100,
            //         plain: true,
            //         floating: false,  // usually you want this set to True (default)
            //         // renderTo: Ext.getBody(),  // usually rendered by it's containing component
            //         items: [{
            //             text: 'plain item 1'
            //         },{
            //             text: 'plain item 2'
            //         }]});

            // return [
            //     {
            //         xtype: 'button',
            //         text: 'test',
            //         menu: [
            //             {text: '1'}
            //         ]
            //     }
            //     // Ext.create('Ext.menu.Menu', {
            //     //     id: 'mainMenu',
            //     //     style: {
            //     //         overflow: 'visible'     // For the Combo popup
            //     //     },
            //     //     items: [
            //     //         {
            //     //             text: 'I like Ext',
            //     //             checked: true,       // when checked has a boolean value, it is assumed to be a CheckItem
            //     //         },
            //     //     ]
            //     // })
            //     // {
            //     //     text: '1',
            //     //     menu: {
            //     //         xtype: 'menu',
            //     //         items: [
            //     //             {text: '1'},
            //     //             {text: '2'},
            //     //             {text: '3'},
            //     //         ]
            //     //     }
            //     // }
            // ]
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
