// Virtual Desktop
// Desktop Layout ref: http://css-tricks.com/arranging-elements-top-bottom-instead-left-right-float/

Ext.define("SSD_Web.view.admin.Role",{
    "extend": "Ext.panel.Panel",
    "controller": "admin-role",
    "viewModel": {
        "type": "admin-role"
    },

    requires: [
        'SSD_Web.view.admin.RoleModel',
        'SSD_Web.view.admin.RoleController'
    ],

    region: 'center',
    layout: {
        type: 'border'
    },
    items: [
       {
            region: 'center',
            xtype: 'dataview',
            padding: 0,
            style: {
                backgroundColor: 'silver',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
            },
            store: Ext.create('Ext.data.Store', {
                   id:'imagesStore',
                   model: Ext.define('Image', {
                       extend: 'Ext.data.Model',
                       fields: [
                           { name:'src', type:'string' },
                           { name:'caption', type:'string' }
                       ]
                   }),
                   data: [
                       { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
                       { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
                       { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
                       { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' },
                       { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
                       { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
                       { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
                       { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' },
                   ]
            }),
            tpl: null,
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No images available',
            initComponent: function(){
              var me = this;

              // design tpl
              me.tpl = new Ext.XTemplate(
                '<tpl for=".">',
                    '<div style="margin: 25px; width: 75px; height: 75px;" class="thumb-wrap">',
                      '<img src="{src}" style="width: 100%; height: 100%;" />',
                      '<br/><span>{caption}{#}{[xindex]}</span>',
                      // '<tpl if="xindex == 4">',
                      //   '<hr>',
                      // '</tpl>',
                    '</div>',
                '</tpl>');

              // call super
              Ext.view.View.prototype.initComponent.call(this);
            },
       },
       {
            region: 'south',
            height: 40,
            bbar: [
                {
                    xtype: 'button',
                    text: 'Menu'
                }
            ]
       }
    ]
});
