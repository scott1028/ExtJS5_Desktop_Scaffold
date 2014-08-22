
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
                allowBlank: true,
                editable: false,
                flex: 4
            },
            this.dateCfg),
            Ext.apply({
                xtype: 'timefield',
                format: 'H:i',
                allowBlank: true,
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


// Practice Impement my Component
// ref: http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.form.field.Picker
Ext.define('SSD_Web.view.ux.DateTimePicker2', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.datetimefield2',

    // for render editing colunm value
    valueToRaw: function(value){
        var datetime_value = new Date(value);
        if(datetime_value){
            return Ext.util.Format.date(datetime_value, 'Y-m-d H:i:s');
        }
        else{
            return Ext.form.field.Picker.prototype.valueToRaw.call(this, value);
        }
    },

    //
    getFieldValue: function(){
        return datetime_value = new Date(this.getValue());
    },

    // only execute once ( singleton pattern )
    createPicker: function(){
        var me = this;

        var datetime_value = new Date(this.getValue());

        me.picker = Ext.create({
            xtype: 'panel',
            layout: {
                type: 'vbox'
            },
            renderTo: me.up('[xtype=roweditor]').el.dom,
            style: {
                position: 'absolute !important',
                left: me.el.dom.offsetLeft + 'px'
            },
            listeners:  {
                'click': {
                    element: 'el',
                    fn: function(){
                        this;
                        me;
                        console.log(this.el.dom.textContent);
                    }
                }
            },
            items: [
                {
                    width: '100%',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    value: datetime_value,
                    listeners: {
                        'select': {
                            element: 'el',
                            fn: function(el, date, eOpts){
                                me.setValue(
                                    date.value + ' ' + me.picker.down('timefield').inputEl.dom.value
                                );
                            }
                        }
                    }
                },
                {
                    width: '100%',
                    xtype: 'timefield',
                    format: 'H:i:s',
                    value: datetime_value,
                    listeners: {
                        select: function(el, time, eOpts){
                            me.setValue(
                                me.picker.down('datefield').inputEl.dom.value + ' ' + el.inputEl.dom.value
                            );
                        }
                    }
                }
            ]
        });

        return me.picker;
    },
    getPicker: function() {
        var me = this;
        var picker = Ext.form.field.Picker.prototype.getPicker.call(me);
        picker.el.setStyle('left', me.el.dom.offsetLeft +'px');

        picker.down('datefield')
            .setValue(me.getFieldValue());
        picker.down('timefield')
            .setValue(me.getFieldValue());

        return me.picker;
    },
});