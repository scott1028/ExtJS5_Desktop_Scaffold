
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
                            listeners: {
                                click: 'login'
                            }
                        }
                    ]
                },
            ]
        }
    ]
});
