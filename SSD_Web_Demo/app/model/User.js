Ext.define('SSD_Web.model.User', {
    extend: 'Ext.data.Model',
    
    // fields: [
    //     { name: 'username', type: 'string' },
    //     { name: 'user_id', type: 'string' },
    // ],

    proxy: {
        type: 'rest',
        url : '/api/privilege/system_user/',
        reader: {
            rootProperty: 'objects',
            type: 'json',
        }
    }
});
