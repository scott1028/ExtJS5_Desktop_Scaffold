Ext.define('SSD_Web.view.main.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-home',
    init: function(){
        console.log('%cWelcome SSD Console', 'color: green;');

        var self = this;

        Ext.Ajax.setUseDefaultXhrHeader(false);

        // send login request
        Ext.Ajax.request({
            url: '/api/privilege/function_tree/',
            method: 'GET',
            success: function(response){
                var data = Ext.util.JSON.decode(response.responseText);
                var menu = SSD_Web.build_menu(data.objects);
                menu.style = {
                    overflow: 'visible'
                };
                self.view.addTool(menu);
            },
            failure: function(){
                //
            }
        });

    },

    // 
    onClickButton: function(){

    },
});
