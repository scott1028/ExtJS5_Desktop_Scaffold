
Ext.define("SSD_Web.view.main.Home",{
    "extend": "Ext.panel.Panel",
    // "extend": "Ext.container.Container",
    "controller": "main-home",
    "viewModel": {
        "type": "main-home"
    },

    // this is a sub border
    layout: {
        type: 'border'
    },

    region: 'center',

    items: [
        {
            region: 'center',
            xtype: 'panel',
            html: '<p>Hello</p>'
        }
    ]
});
