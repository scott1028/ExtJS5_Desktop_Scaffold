/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SSD_Web.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SSD_Web',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});


// var test = function(){
//     // Set up a model to use in our Store
//     Ext.define('User', {
//         extend: 'Ext.data.Model',
//         fields: [
//             {name: 'firstName', type: 'string'},
//             {name: 'lastName',  type: 'string'},
//             {name: 'age',       type: 'int'},
//             {name: 'eyeColor',  type: 'string'}
//         ]
//     });

//     var myStore = Ext.create('Ext.data.Store', {
//         model: 'User',
//         data : [
//             {firstName: 'Ed',    lastName: 'Spencer'},
//             {firstName: 'Tommy', lastName: 'Maintz'},
//             {firstName: 'Aaron', lastName: 'Conran'},
//             {firstName: 'Jamie', lastName: 'Avins'}
//         ]
//     });

//     debugger;
// }
