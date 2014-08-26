// Virtual Desktop

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
                flexWrap: 'wrap'
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
            tpl: new Ext.XTemplate(
                    '<tpl for=".">',
                        '<div style="margin: 25px; display: flex; width: 200px; height: 120px;" class="thumb-wrap">',
                          '<img src="{src}" />',
                          '<br/><span>{caption}</span>',
                        '</div>',
                    '</tpl>'
            ),
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No images available',
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
