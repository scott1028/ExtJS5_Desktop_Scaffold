Ext.define("SSD_Web.view.main.Home",{
    "extend": "Ext.panel.Panel",
    // "extend": "Ext.container.Container",
    "controller": "main-home",
    "viewModel": {
        "type": "main-home"
    },

    // Depedency
    requires: [
        'SSD_Web.view.main.HomeModel',
        'SSD_Web.view.main.HomeController'
    ],

    // this is a sub border
    layout: {
        type: 'border'
    },
    region: 'center',

    title: '<span onclick="location.href=\'/\';" style="cursor: pointer;">Taisys SSD SoftSIM System</span>',

    id: 'centerPanel',

    // switch view component
    items: [
        {
            id: 'centerCmp',
            region: 'center',
            xtype: 'panel',
            loader: {
                url: 'app/view/main/welcome.html',
                autoLoad: true
            }
            // html: '<p>Hello</p>'
        },

        // test
        // test_cpm
    ]
});
