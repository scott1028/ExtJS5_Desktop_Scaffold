
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
                { width: 'auto', header: 'ID', dataIndex: 'id'},
                { width: 'auto', header: 'Username', dataIndex: 'username', editor: true },
                { width: 'auto', header: 'UserID', dataIndex: 'user_id'},
                { width: 'auto', header: 'Email', dataIndex: 'email'},
                { width: 'auto', header: 'Type', dataIndex: 'type'},
                { width: 'auto', header: 'Status', dataIndex: 'status'},
                { width: 'auto', header: 'SubscriberID', dataIndex: 'subscriber_id'},
                { width: 'auto', header: 'CardIssuer', dataIndex: 'card_issuer'},
                { width: 'auto', header: 'SuspendReason', dataIndex: 'suspend_reason'},
                { width: 'auto', header: 'LastLogin', dataIndex: 'last_login',
                  editor: {
                    xtype: 'datefield',
                    // xtype: 'textfield',
                    allowBlank: false,
                    format: 'Y-m-d H:i:s',
                    // listeners: {
                    //     click: {
                    //         element: 'el',
                    //         fn: function(){
                    //             debugger;
                    //         }
                    //     }
                    // },
                    
                    createPicker: function(){
                        return Ext.create('Ext.Component', {
                            html: 'Hello world!',
                            width: 300,
                            height: 200,
                            padding: 20,
                            style: {
                                zIndex: 100000
                            },
                            renderTo: document.body
                        });
                    },
                    onExpand: function(){
                        console.log(this.picker);
                    }
                    // createPicker: function(){
                    //     var me = this,
                    //     format = Ext.String.format;

                    //     var fn = Ext.picker.Date.prototype.renderTpl.pop();

                    //     Ext.picker.Date.prototype.renderTpl.push('<div>789789</div>');

                    //     Ext.picker.Date.prototype.renderTpl.push(fn);

                    //     var dateTimePicker =  Ext.create('Ext.picker.Date',{
                    //         pickerField: me,
                    //         renderTo: document.body,
                    //         floating: true,
                    //         hidden: true,
                    //         focusOnShow: true,
                    //         minDate: me.minValue,
                    //         maxDate: me.maxValue,
                    //         disabledDatesRE: me.disabledDatesRE,
                    //         disabledDatesText: me.disabledDatesText,
                    //         disabledDays: me.disabledDays,
                    //         disabledDaysText: me.disabledDaysText,
                    //         format: me.format,
                    //         showToday: me.showToday,
                    //         startDay: me.startDay,
                    //         minText: format(me.minText, me.formatDate(me.minValue)),
                    //         maxText: format(me.maxText, me.formatDate(me.maxValue)),
                    //         listeners: {
                    //             scope: me,
                    //             select: me.onSelect
                    //         },
                    //         keyNavConfig: {
                    //             esc: function() {
                    //                 me.collapse();
                    //                 me.focus();
                    //             }
                    //         },
                    //         renderTpl: Ext.picker.Date.prototype.renderTpl
                    //     });

                    //     return dateTimePicker;
                    // }
                  },
                  xtype:'datecolumn',
                  format: 'Y-m-d H:i:s'
                },
                { width: 'auto', header: 'PasswordLastUpdateDate', dataIndex: 'password_last_update_date'},
                { width: 'auto', header: 'PasswordResetCount', dataIndex: 'password_reset_count'},
                { width: 'auto', header: 'Roles', dataIndex: 'roles'},
                { width: 'auto', header: 'ResourceURI', dataIndex: 'resource_uri'},
                { width: 'auto', header: 'CreateUser', dataIndex: 'create_user'},
                { width: 'auto', header: 'CreateDate', dataIndex: 'create_date'},
                { width: 'auto', header: 'UpdateUser', dataIndex: 'update_user'},
                { width: 'auto', header: 'UpdateDate', dataIndex: 'update_date'},
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
        }
    ]
});
