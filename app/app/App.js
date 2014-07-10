/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Desktop.App', {
    extend: 'Ext.ux.desktop.App',

    requires: [
        'Ext.window.MessageBox',

        'Ext.ux.desktop.ShortcutModel',

        'Desktop.SystemStatus',
        'Desktop.VideoWindow',
        'Desktop.GridWindow',
        'Desktop.TabWindow',
        'Desktop.AccordionWindow',
        'Desktop.Notepad',
        'Desktop.BogusMenuModule',
        'Desktop.BogusModule',

//        'Desktop.Blockalanche',
        'Desktop.Settings',

        'Desktop.VersionLog',
    ],

    init: function() {
        // custom logic before getXYZ methods get called...

        this.callParent();

        // now ready...
    },

    getModules : function(){
        return [
            new Desktop.VideoWindow(),
            //new Desktop.Blockalanche(),
            new Desktop.SystemStatus(),
            new Desktop.GridWindow(),
            new Desktop.TabWindow(),
            new Desktop.AccordionWindow(),
            new Desktop.Notepad(),
            new Desktop.BogusMenuModule(),
            new Desktop.BogusModule(),
            new Desktop.VersionLog(),
            new Desktop.UserManage(),
        ];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                    { name: 'Grid Window', iconCls: 'grid-shortcut', module: 'grid-win' },
                    { name: 'Accordion Window', iconCls: 'accordion-shortcut', module: 'acc-win' },
                    { name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' },
                    { name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'},
                    { name: 'SSD Version Log', iconCls: 'grid-shortcut', module: 'tab-version-log'},
                    { name: 'SSD User Manager', iconCls: 'grid-shortcut', module: 'tab-user-manager'}
                ]
            }),

            wallpaper: 'resources/images/wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Don Griffin',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Settings',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    },
                    {
                        text:'Login',
                        iconCls:'login',
                        handler: me.onLogin,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
                { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
                { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
        // Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
        Ext.Ajax.request({
            url: '/api/logout/',
            method: 'GET',
            success: function(response, opts) {
                //
            },
            failure: function(response, opts) {
                //
            }
        });
    },

    onSettings: function () {
        var dlg = new Desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    },

    onLogin: function () {
        // Ext.MessageBox.prompt('Input Name:Password', 'Please enter your name:password:', function(btn, data){
        Ext.Ajax.request({
            url: '/api/login/',
            method: 'POST',
            params: {
                username: 'admin',
                password: 'admin',
                source: 'web'
            },
            success: function(response, opts) {
                console.log(data);
            },
            failure: function(response, opts) {
                console.log(data);  
            }
        });
        // });
    }
});
