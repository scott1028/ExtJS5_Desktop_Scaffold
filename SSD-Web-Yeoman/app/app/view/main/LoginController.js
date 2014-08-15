Ext.define('SSD_Web.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-login',

    // constructor
    init: function(){
        // debugger;
    },

    // bind to login_view
    login: function(){
        var self = this;
        console.log('%clogin!', 'color: blue;');

        // submit
        // var form = this.up('form').getForm();
        var form_dom = this.view.down('form');
        var form = form_dom.getForm();
        if (form.isValid()) {
            // close Ext Ajax send options method
            // Ext.Ajax.useDefaultXhrHeader = false // old version;
            Ext.Ajax.setUseDefaultXhrHeader(false);

            // send login request
            Ext.Ajax.request({
                url: '/api/login/',
                // url: 'http://127.0.0.1:3333/api/login/',
                method: 'POST',
                params: {
                    username: form_dom.down('textfield[name=Name]').value,
                    password: form_dom.down('textfield[name=Password]').value,
                    source: 'web'
                },
                success: function(response){

                    Ext.Ajax.setUseDefaultXhrHeader(false);

                    // send login request
                    // Ext.Ajax.request({
                    //     url: '/api/privilege/function_tree/',
                    //     method: 'GET',
                    //     success: function(response){
                    //         var data = Ext.util.JSON.decode(response.responseText);
                    //         var menu = SSD_Web.build_menu(data.objects);

                    //         self.view.up('#main-layout').add(Ext.create('SSD_Web.view.main.Home', {
                    //             tbar: menu
                    //         }));

                    //         self.view.destroy();


                    //     },
                    //     failure: function(){
                    //         //
                    //     }
                    // });

                    self.view.up('#main-layout').add(Ext.create('SSD_Web.view.main.Home'));
                    self.view.destroy();

                    // set a logined flag
                    Ext.util.Cookies.set('loggedin', 200);

                    console.log('%clogin success!', 'color: green;');
                },
                failure: function(){
                    // clear logined flag
                    Ext.util.Cookies.clear('loggedin');
                    Ext.MessageBox.alert('SSD System Message', 'Login fail!');
                }
            });
        }

    }
});
