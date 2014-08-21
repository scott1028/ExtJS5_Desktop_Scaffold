Ext.define("SSD_Web.view.admin.User",{
    "extend": "Ext.panel.Panel",
    "controller": "admin-user",
    "viewModel": {
        "type": "admin-user"
    },

    requires: [
        'SSD_Web.view.admin.UserModel',
        'SSD_Web.view.admin.UserController'
    ],

    region: 'center',
    layout: {
        type: 'border'
    },
    items: [
        {
            id: 'centerCmp',
            xtype: 'grid',

            // dependencies
            requires: [
                'SSD_Web.view.ux.DateTimePicker'
            ],

            columns: [
                { width: 'auto', flex: 0.3, header: 'ID', dataIndex: 'id'},
                { width: 'auto', flex: 1, header: 'UserID', dataIndex: 'user_id'},
                { width: 'auto', flex: 1, header: 'Username', dataIndex: 'username', editor: true },
                { width: 'auto', flex: 1, header: 'Email', dataIndex: 'email', editor: true },
                { width: 'auto', flex: 1, header: 'User Type', dataIndex: 'type'},
                { width: 'auto', flex: 1, header: 'User Status', dataIndex: 'status', editor: true},
                { width: 'auto', flex: 1, header: 'SuspendReason', dataIndex: 'suspend_reason', editor: true},
                { width: 'auto', flex: 1, header: 'SubscriberID', dataIndex: 'subscriber_id'},
                { width: 'auto', flex: 1, header: 'CardIssuer', dataIndex: 'card_issuer'},
                { width: 'auto', flex: 1, header: 'CreateUser', dataIndex: 'create_user'},
                { width: 'auto', flex: 1, header: 'UpdateDate', dataIndex: 'update_date',
                    editor:{
                        xtype: 'datetimefield',
                        // allowBlank: true,
                        format: 'Y-m-d H:i:s'
                    },
                    xtype: 'datecolumn',
                    format: 'Y-m-d H:i:s'
                },
                { width: 'auto', flex: 3, header: 'LastLogin', dataIndex: 'last_login',
                  editor: {
                    xtype: 'datetimefield2',
                    allowBlank: false,
                    format: 'Y-m-d H:i:s',
                  },
                  xtype:'datecolumn',
                  format: 'Y-m-d H:i:s',
                },
                // { width: 'auto', flex: 1, header: 'PasswordLastUpdateDate', dataIndex: 'password_last_update_date'},
                // { width: 'auto', flex: 1, header: 'PasswordResetCount', dataIndex: 'password_reset_count'},
                // { width: 'auto', flex: 1, header: 'Roles', dataIndex: 'roles'},
                // { width: 'auto', flex: 1, header: 'ResourceURI', dataIndex: 'resource_uri'},
                // { width: 'auto', flex: 1, header: 'CreateDate', dataIndex: 'create_date'},
                // { width: 'auto', flex: 1, header: 'UpdateUser', dataIndex: 'update_user'},
            ],
            region: 'center',
            store: null,
            bbar: [
                '->',
                {
                    xtype: 'button',
                    text: 'Add'
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting',
                    clicksToEdit: 1
                }
            ],
            listeners: {
                'edit': 'editHandler'
            },
            // store: Ext.create('SSD_Web.store.User'),
            initComponent: function(){
                // create a store
                this.store = Ext.create('SSD_Web.store.User');

                // call parent method
                Ext.grid.Panel.prototype.initComponent.call(this)
            }
        },

        // Ext.create('Ext.window.Window', {
        // region: 'south',
        // items: [{
        //     xtype: 'datefield',
        //     anchor: '100%',
        //     fieldLabel: 'Date',
        //     name: 'date',
        //     // The value matches the format; will be parsed and displayed using that format.
        //     format: 'm d Y',
        //     value: '2 4 1978'
        // }, {
        //     xtype: 'datefield',
        //     anchor: '100%',
        //     fieldLabel: 'Date',
        //     name: 'date',
        //     // The value does not match the format, but does match an altFormat; will be parsed
        //     // using the altFormat and displayed using the format.
        //     format: 'm d Y',
        //     altFormats: 'm,d,Y|m.d.Y',
        //     value: '2.4.1978'
        // }]})
    ]
});
