
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
    createPicker: function(){
        var me = this;

        var style = {
            position: 'absolute !important',
            width: '200px',
            height: '200px',
            left: me.el.dom.style.left,
            top: '50x',
            backgroundColor: 'silver'
        }

        me.picker = Ext.create({
            // xtype: 'panel',
            xtype: 'component',
            // layout: {
            //     type: 'border'
            // },
            // width: '100%',
            // height: '100%',
            html: '<p>Hello</p>',
            // find the rowEditor root Node
            renderTo: me.up('[xtype=roweditor]').el.dom,
            style: style,
            // items: [
            //     {
            //         xtype: 'datepicker'
            //     },
            //     {
            //         xtype: 'timepicker'
            //     }
            // ]
        });

        return me.picker;
    },
    onExpand: function(){   
        var me = this;

        var roweditor = me.up('[xtype=roweditor]').el.dom;
        var contaner_parent = roweditor.offsetParent;

        var style = {
            position: 'absolute !important',
            width: '200px',
            height: '200px',
            left: me.el.dom.style.left,
            top: '50x',
            backgroundColor: 'silver'
        }

        // drop to top
        if(roweditor.offsetTop + 200 >= contaner_parent.clientHeight){
            style.top = '-200px';
        }

        // drop to bottom
        if(roweditor.offsetTop + 200 <= contaner_parent.clientHeight){
            style.top = '44px';
        }

        if(me.picker){
            me.picker.el.dom.style.top = style.top;
        }        
    }
});