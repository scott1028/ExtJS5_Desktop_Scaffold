// Chrome has a bug store.data will return [undefined * 8],
// but store.data.items is correct data array.

Ext.define('SSD_Web.store.User', {
    extend: 'Ext.data.Store',
    model: 'SSD_Web.model.User',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: '/api/privilege/system_user/',
        reader: {
            rootProperty: 'objects',
            type: 'json',
        }
    }
});
