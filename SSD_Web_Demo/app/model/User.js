Ext.define('SSD_Web.model.User', {
    extend: 'Ext.data.Model',
    
    // affect model create, save...etc
    fields: [
        { text: 'ID', type: 'auto' },
        { text: 'Username', type: 'auto' },
        { text: 'UserID', type: 'auto' },
        { text: 'Email', type: 'auto' },
        { text: 'Type', type: 'auto' },
        { text: 'Status', type: 'auto' },
        { text: 'SubscriberID', type: 'auto' },
        { text: 'CardIssuer', type: 'auto' },
        { text: 'SuspendReason', type: 'auto' },
        // { text: 'LastLogin', type: 'date', dateFormat: 'Y-m-d' },
        { text: 'LastLogin', type: 'date', dateFormat: 'Y-m-d H:i:s' },
        { text: 'PasswordLastUpdateDate', type: 'auto' },
        { text: 'PasswordResetCount', type: 'auto' },
        { text: 'Roles', type: 'auto' },
        { text: 'ResourceURI', type: 'auto' },
        { text: 'CreateUser', type: 'auto' },
        { text: 'CreateDate', type: 'auto' },
        { text: 'UpdateUser', type: 'auto' },
        { text: 'UpdateDate', type: 'auto' },
    ],

    proxy: {
        type: 'rest',
        url : '/api/privilege/system_user/',
        reader: {
            rootProperty: 'objects',
            type: 'json',
        }
    },

    // add new method
    patch: function(newValues){
        // debugger;
    }
});
