
Ext.define("SSD_Web.view.admin.User",{
    "extend": "Ext.panel.Panel",
    "controller": "admin-user",
    "viewModel": {
        "type": "admin-user"
    },
    region: 'center',
    layout: {
        type: 'border'
    },
    items: [
        {
            id: 'centerCmp',
            xtype: 'grid',
            columns: [
                { width: 'auto', text: 'ID', dataIndex: 'id'},
                { width: 'auto', text: 'Username', dataIndex: 'username', editor: true },
                { width: 'auto', text: 'UserID', dataIndex: 'user_id'},
                { width: 'auto', text: 'Email', dataIndex: 'email'},
                { width: 'auto', text: 'Type', dataIndex: 'type'},
                { width: 'auto', text: 'Status', dataIndex: 'status'},
                { width: 'auto', text: 'SubscriberID', dataIndex: 'subscriber_id'},
                { width: 'auto', text: 'CardIssuer', dataIndex: 'card_issuer'},
                { width: 'auto', text: 'SuspendReason', dataIndex: 'suspend_reason'},
                { width: 'auto', text: 'LastLogin', dataIndex: 'last_login'},
                { width: 'auto', text: 'PasswordLastUpdateDate', dataIndex: 'password_last_update_date'},
                { width: 'auto', text: 'PasswordResetCount', dataIndex: 'password_reset_count'},
                { width: 'auto', text: 'Roles', dataIndex: 'roles'},
                { width: 'auto', text: 'ResourceURI', dataIndex: 'resource_uri'},
                { width: 'auto', text: 'CreateUser', dataIndex: 'create_user'},
                { width: 'auto', text: 'CreateDate', dataIndex: 'create_date'},
                { width: 'auto', text: 'UpdateUser', dataIndex: 'update_user'},
                { width: 'auto', text: 'UpdateDate', dataIndex: 'update_date'},
            ],
            region: 'center',
            // preload
            store: Ext.create('SSD_Web.store.User'),
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
            }
        }
    ]
});
