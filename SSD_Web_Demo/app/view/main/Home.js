
Ext.define("SSD_Web.view.main.Home",{
    "extend": "Ext.container.Container",
    "controller": "main-home",
    "viewModel": {
        "type": "main-home"
    },

    // this is a sub border
    layout: {
        type: 'border'
    },
    region: 'center',

    // "html": "Hello, World!!",
    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'User Manager',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});
