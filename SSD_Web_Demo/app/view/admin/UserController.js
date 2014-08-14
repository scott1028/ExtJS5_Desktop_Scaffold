Ext.define('SSD_Web.view.admin.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-user',
    editHandler: function(cmp, obj){
        console.log(obj.record instanceof SSD_Web.model.User);
        console.log(obj.newValues);
        console.log(obj.originalValues);

        obj.record.set('username', obj.newValues.username);

        // extjs use PUT request
        obj.record.patch();

        // debugger;

        // test Ajax by PATCH
        // Ext.Ajax.request({
        //     method: 'PATCH',
        //     url: '/',
        //     params: {
        //         id: 1
        //     },
        //     success: function(response){
        //         // var text = response.responseText;
        //         // process server response here
        //         debugger;
        //     },
        //     failure: function(res, xhr){
        //         debugger;
        //     }
        // });
    }
});
