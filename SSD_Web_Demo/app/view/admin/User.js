
// customize own component
Ext.define('SSD_Web.ux.datetimefield', {
    extend: 'Ext.form.DateField',
    alias: 'widget.datetimefield',
    createPicker: function(){
        var me = this,
            format = Ext.String.format;

        return new Ext.picker.Date({
            pickerField: me,
            floating: true,
            focusable: false,
            hidden: true,
            minDate: me.minValue,
            maxDate: me.maxValue,
            disabledDatesRE: me.disabledDatesRE,
            disabledDatesText: me.disabledDatesText,
            disabledDays: me.disabledDays,
            disabledDaysText: me.disabledDaysText,
            format: me.format,
            showToday: me.showToday,
            startDay: me.startDay,
            minText: format(me.minText, me.formatDate(me.minValue)),
            maxText: format(me.maxText, me.formatDate(me.maxValue)),
            listeners: {
                scope: me,
                select: me.onSelect
            },
            keyNavConfig: {
                esc: function() {
                    me.collapse();
                }
            },
            renderTpl: [
                '<div id="{id}-innerEl" data-ref="innerEl">',
                    '<div class="{baseCls}-header">',
                        '<div id="{id}-prevEl" data-ref="prevEl" class="{baseCls}-prev {baseCls}-arrow" role="button" title="{prevText}"></div>',
                        '<div id="{id}-middleBtnEl" data-ref="middleBtnEl" class="{baseCls}-month" role="heading">{%this.renderMonthBtn(values, out)%}</div>',
                        '<div id="{id}-nextEl" data-ref="nextEl" class="{baseCls}-next {baseCls}-arrow" role="button" title="{nextText}"></div>',
                    '</div>',
                    '<table role="grid" id="{id}-eventEl" data-ref="eventEl" class="{baseCls}-inner" {%',
                        // If the DatePicker is focusable, make its eventEl tabbable.
                        'if (values.$comp.focusable) {out.push("tabindex=\\\"0\\\"");}',
                    '%} cellspacing="0">',
                        '<thead><tr role="row">',
                            '<tpl for="dayNames">',
                                '<th role="columnheader" class="{parent.baseCls}-column-header" aria-label="{.}">',
                                    '<div role="presentation" class="{parent.baseCls}-column-header-inner">{.:this.firstInitial}</div>',
                                '</th>',
                            '</tpl>',
                        '</tr></thead>',
                        '<tbody>',
                            '<tr role="row">',
                                '<tpl for="days">',
                                    '{#:this.isEndOfWeek}',
                                    '<td role="gridcell" id="{[Ext.id()]}">',
                                        '<div hidefocus="on" class="{parent.baseCls}-date"></div>',
                                    '</td>',
                                '</tpl>',
                            '</tr>',
                        '</tbody>',
                    '</table>',
                    
                    // add timepicker
                    '<div>',
                        '<select style="width: 100%;">',
                            '<tpl for="this.timebuild()">',
                                '<option value="{.}">{.}</option>',
                            '</tpl>',
                        '</select>',
                    '</div>',

                    '<tpl if="showToday">',
                        '<div id="{id}-footerEl" data-ref="footerEl" role="presentation" class="{baseCls}-footer">{%this.renderTodayBtn(values, out)%}</div>',
                    '</tpl>',
                '</div>',
                {
                    // 00:00 ~ 23:00
                    timebuild: function(){
                        return (function(){var obj=[];for(var i = 0; i < 24; i++){obj.push( (i < 10 ? "0" + i.toString() : i.toString()) + ":00" )} return obj }());
                    },

                    firstInitial: function(value) {
                        return Ext.picker.Date.prototype.getDayInitial(value);
                    },
                    isEndOfWeek: function(value) {
                        // convert from 1 based index to 0 based
                        // by decrementing value once.
                        value--;
                        var end = value % 7 === 0 && value !== 0;
                        return end ? '</tr><tr role="row">' : '';
                    },
                    renderTodayBtn: function(values, out) {
                        Ext.DomHelper.generateMarkup(values.$comp.todayBtn.getRenderTree(), out);
                    },
                    renderMonthBtn: function(values, out) {
                        Ext.DomHelper.generateMarkup(values.$comp.monthBtn.getRenderTree(), out);
                    }
                }
            ],
        });
    }
})


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
                    xtype: 'datetimefield',
                    allowBlank: false,
                    format: 'Y-m-d H:i:s',
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
        },

        Ext.create('Ext.form.Panel', {
        region: 'south',
        items: [{
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Date',
            name: 'date',
            // The value matches the format; will be parsed and displayed using that format.
            format: 'm d Y',
            value: '2 4 1978'
        }, {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Date',
            name: 'date',
            // The value does not match the format, but does match an altFormat; will be parsed
            // using the altFormat and displayed using the format.
            format: 'm d Y',
            altFormats: 'm,d,Y|m.d.Y',
            value: '2.4.1978'
        }]})
    ]
});
