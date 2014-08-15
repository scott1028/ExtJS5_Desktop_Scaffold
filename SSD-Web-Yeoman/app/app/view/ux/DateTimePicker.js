
// customize own component
Ext.define('SSD_Web.view.ux.DateTimePicker', {
    extend: 'Ext.form.DateField',
    alias: 'widget.datetimefield',
    createPicker: function(){
        var me = this,
            format = Ext.String.format;

        // test input value
        // http://docs.sencha.com/extjs/5.0.0/apidocs/source/Date2.html#Ext-picker-Date

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
            beforeRender: function(){
                Ext.picker.Date.prototype.beforeRender.call(this);
                this.renderData.test = 100;
                this.renderData.time = me.value
            },
            renderTpl: Ext.clone(Ext.picker.Date.prototype.renderTpl)
            // renderTpl: [
            //     '<div id="{id}-innerEl" data-ref="innerEl">',
            //         '<div class="{baseCls}-header">',
            //             '<div id="{id}-prevEl" data-ref="prevEl" class="{baseCls}-prev {baseCls}-arrow" role="button" title="{prevText}"></div>',
            //             '<div id="{id}-middleBtnEl" data-ref="middleBtnEl" class="{baseCls}-month" role="heading">{%this.renderMonthBtn(values, out)%}</div>',
            //             '<div id="{id}-nextEl" data-ref="nextEl" class="{baseCls}-next {baseCls}-arrow" role="button" title="{nextText}"></div>',
            //         '</div>',
            //         '<table role="grid" id="{id}-eventEl" data-ref="eventEl" class="{baseCls}-inner" {%',
            //             // If the DatePicker is focusable, make its eventEl tabbable.
            //             'if (values.$comp.focusable) {out.push("tabindex=\\\"0\\\"");}',
            //         '%} cellspacing="0">',
            //             '<thead><tr role="row">',
            //                 '<tpl for="dayNames">',
            //                     '<th role="columnheader" class="{parent.baseCls}-column-header" aria-label="{.}">',
            //                         '<div role="presentation" class="{parent.baseCls}-column-header-inner">{.:this.firstInitial}</div>',
            //                     '</th>',
            //                 '</tpl>',
            //             '</tr></thead>',
            //             '<tbody>',
            //                 '<tr role="row">',
            //                     '<tpl for="days">',
            //                         '{#:this.isEndOfWeek}',
            //                         '<td role="gridcell" id="{[Ext.id()]}">',
            //                             '<div hidefocus="on" class="{parent.baseCls}-date"></div>',
            //                         '</td>',
            //                     '</tpl>',
            //                 '</tr>',
            //             '</tbody>',
            //         '</table>',
                    
            //         // add timepicker
            //         '<div>',
            //             '<select style="width: 100%;" onclick="HTMLSelectElement.prototype.click.call(this);">',
            //                 '<tpl for="this.timebuild()">',
            //                     '<option value="{.}" onclick="">{.}</option>',
            //                 '</tpl>',
            //             '</select>',
            //         '</div>',

            //         // add value
            //         '<div>{dayNames}</div>',
            //         '<div>{test}</div>',
            //         '<div>{time}</div>',

            //         '<tpl if="showToday">',
            //             '<div id="{id}-footerEl" data-ref="footerEl" role="presentation" class="{baseCls}-footer">{%this.renderTodayBtn(values, out)%}</div>',
            //         '</tpl>',
            //     '</div>',
            //     {
            //         // 00:00 ~ 23:00
            //         timebuild: function(){
            //             return (function(){var obj=[];for(var i = 0; i < 24; i++){obj.push( (i < 10 ? "0" + i.toString() : i.toString()) + ":00" )} return obj }());
            //         },

            //         firstInitial: function(value) {
            //             return Ext.picker.Date.prototype.getDayInitial(value);
            //         },
            //         isEndOfWeek: function(value) {
            //             // convert from 1 based index to 0 based
            //             // by decrementing value once.
            //             value--;
            //             var end = value % 7 === 0 && value !== 0;
            //             return end ? '</tr><tr role="row">' : '';
            //         },
            //         renderTodayBtn: function(values, out) {
            //             Ext.DomHelper.generateMarkup(values.$comp.todayBtn.getRenderTree(), out);
            //         },
            //         renderMonthBtn: function(values, out) {
            //             Ext.DomHelper.generateMarkup(values.$comp.monthBtn.getRenderTree(), out);
            //         }
            //     }
            // ],
        });
    }
})
