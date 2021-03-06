Ext.define('SSD_Web.model.User', {
    extend: 'Ext.data.Model',
    
    // affect model create, save...etc
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'username', type: 'auto' },
        { name: 'user_id', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'yype', type: 'auto' },
        { name: 'status', type: 'auto' },
        { name: 'subscriber_id', type: 'auto' },
        { name: 'card_issuer', type: 'auto' },
        { name: 'suspend_reason', type: 'auto' },
        { name: 'last_login', type: 'date', dateFormat: 'Y-m-d H:i:s' },
        { name: 'password_last_update_date', type: 'auto' },
        { name: 'password_reset_count', type: 'auto' },
        { name: 'roles', type: 'auto' },
        { name: 'resource_uri', type: 'auto' },
        { name: 'create_user', type: 'auto' },
        { name: 'create_date', type: 'auto' },
        { name: 'update_user', type: 'auto' },
        { name: 'update_date', type: 'auto' },
    ],

    proxy: {
        type: 'rest',
        url : '/api/privilege/system_user/',
        reader: {
            rootProperty: 'objects',
            type: 'json',

            // Another method
            read: function(response, readOptions){
                var res = Ext.data.Reader.prototype.read.call(this, response, readOptions);

                res.records.forEach(function(r, i ,a){
                    r.data.last_login = new Date(r.data.last_login + '+0800');
                    if(r.data.update_date){
                        r.data.update_date = new Date(r.data.update_date + '+0800');
                    }
                })

                return res;
            }
        }
    },

    // add new method
    patch: function(newValues){
        // debugger;
    }
});
