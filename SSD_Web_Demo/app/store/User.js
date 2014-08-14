// Chrome has a bug store.data will return [undefined * 8],
// but store.data.items is correct data array.

// as a model preload container
Ext.define('SSD_Web.store.User', {
    extend: 'Ext.data.Store',
    model: 'SSD_Web.model.User',
    id: 'userStore',
    autoLoad: true
});
