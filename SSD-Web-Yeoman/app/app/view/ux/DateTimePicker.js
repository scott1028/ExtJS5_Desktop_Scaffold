
// customize own component
// DateTimePicker
// Invoked By RowEditor & Grid Column
Ext.define('SSD_Web.view.ux.DateTimePicker', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.datetimefield',
    mixins: {
        field : 'Ext.form.field.Field'
    },

    layout: 'hbox',
    combineErrors: true,
    msgTarget: 'side',
    dateTimeFormat : 'Y-m-d H:i:s',
    dateCfg: {},
    timeCfg: {},

    initComponent: function() {
        var me = this;
        me.buildField();
        me.callParent();
        this.dateField = this.down('datefield')
        this.timeField = this.down('timefield')
        me.initField();
    },

    // @private
    buildField: function() {
        this.items = [
            Ext.apply({
                xtype: 'datefield',
                format: 'Y-m-d',
                allowBlank: false,
                editable: false,
                flex: 4
            },
            this.dateCfg),
            Ext.apply({
                xtype: 'timefield',
                format: 'H:i',
                allowBlank: false,
                submitFormat: 'H:i:s',
                flex: 3
            },
            this.timeCfg)
        ]
    },

    getValue: function() {
        var value, date = this.dateField.getSubmitValue(), time = this.timeField
        .getSubmitValue();

        // console.log(date);
        // console.log(time);

        if (date) {
            if (time) {
                var format = this.getFormat()
                console.log(format);
                value = Ext.Date.parse(date + ' ' + time, format)
            } else {
                value = this.dateField.getValue()
            }
        }
        return value
    },

    getSubmitValue: function() {
        console.log(this.getValue());
        var value = this.getValue();
        return value ? Ext.Date.format(value, this.dateTimeFormat) : null;
    },

    setValue: function(value) {
        this.dateField.setValue(value)
        this.timeField.setValue(value)
    },

    getSubmitData: function() {
        var value = this.getValue()
        var format = this.getFormat()
        return value ? Ext.Date.format(value, format) : null;
    },

    getFormat: function() {
        return (this.dateField.submitFormat || this.dateField.format) + " "
        + (this.timeField.submitFormat || this.timeField.format)
    }
});
