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
        'Ext.util.Cookies'
    ]
});
