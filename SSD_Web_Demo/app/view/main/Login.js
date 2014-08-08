
Ext.define("SSD_Web.view.main.Login",{
    extend: 'Ext.container.Container',
    "controller": "main-login",
    "viewModel": {
        "type": "main-login"
    },
    id: 'login_view',
    items: [
        {
            xtype: 'window',
            autoShow: true,
            title: 'SSD Login',
            constrainHeader: true,
            width: 400,
            // height: 300,
            closable: false,
            resizable: false,
            items: [
                {
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    bodyPadding: 10,
                    xtype: 'form',
                    url: '/api/login/',
                    items:[
                        {
                            xtype: 'textfield',
                            name: 'Name',
                            fieldLabel: 'Name',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'Password',
                            inputType: 'password',
                            fieldLabel: 'password',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            width: '100%',
                            text: 'Login',
                            formBind: true,
                            disabled: true,
                            handler: function(){
                                console.log('%clogin!', 'color: blue;');

                                // submit
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    // form.submit({
                                    //     success: function(form, action) {
                                    //        Ext.Msg.alert('Success', action.result.msg);
                                    //     },
                                    //     failure: function(form, action) {
                                    //         Ext.Msg.alert('Failed', action.result.msg);
                                    //     }
                                    // });

                                    Ext.Ajax.request({
                                        url: 'http://127.0.0.1:3333/api/login/',
                                        method: 'POST',
                                        params: {
                                            username: this.up('form').down('textfield[name=Name]').value,
                                            password: this.up('form').down('textfield[name=Password]').value,
                                            source: 'web'
                                        },
                                        success: function(response){
                                            var text = response.responseText;
                                            // process server response here

                                            debugger;
                                        }
                                    });
                                }


                                // main
                                var main = Ext.create('SSD_Web.view.main.Home');
                                this.up('#main-layout').add(main);

                                // 
                                this.up('#login_view').destroy();
                            }
                        }
                    ]
                },
            ]
        }
    ]
});
