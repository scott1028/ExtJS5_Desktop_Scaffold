/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Desktop.VersionLog', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.tab.Panel'
    ],

    id:'tab-version-log',

    init : function(){
        this.launcher = {
            text: 'Version Log Window',
            iconCls:'tabs'
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('tab-version-log');
        if(!win){
            win = desktop.createWindow({
                id: 'tab-version-log',
                title:'SSD Version Log',
                width:740,
                height:480,
                iconCls: 'tabs',
                animCollapse:false,
                border:false,
                constrainHeader:true,
                layout: 'fit',
                html: '<iframe style="width: 100%; height: 100%;" id="log_version" src="/api/version/info/"></iframe>'
            });
        }
        return win;
    }
});
