/*
 * File: app/controller/ContactUsController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Cobuy.controller.ContactUsController', {
    extend: 'Ext.app.Controller',

    models: [
        'ContactUs'
    ],
    views: [
        'ContactUsForm',
        'ContactUsWin'
    ],

    onSendingContactUsInformationButtonClick: function(button, e, eOpts) {


        /**var win = button.up('window'),
        			formPanel = win.down('form');
        			//store = this.getAllSubscriptionPaymentsGrid().getStore();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
                            url: '/cobuy/index.php?r=ContactUs/addThisNewContactUsRequest',
                           //success or failure
        					success: function(form, action) {
        						var result = action.result;
        						if(result.success) {
        							Ext.Msg.alert('Success!', result.msg);
                                    //Ext.Msg.alert('Success!', 'New  Group Information Saved.');
        							//store.load();
        							//store.load();

        							win.close();
        						} else {
        							Ext.Msg.alert(result.msg);
        						}
        					},
        					failure: function(form, action) {
        						var result = action.result;
                                switch(action.failureType) {
        							case Ext.form.action.Action.CLIENT_INVALID:
        							Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
        							break;
        							case Ext.form.action.Action.CONNECT_FAILURE:
        							Ext.Msg.alert('Failure', 'Ajax communication failed');
        							break;
        							case Ext.form.action.Action.SERVER_INVALID:
        								Ext.Msg.alert('Failure', result.msg);
        						}
        					}
        				});
        			}

                    **/

        var win = button.up('window'),
        			formPanel = win.down('form');
                    //formPanel = win.down('form');

        Ext.Ajax.request({
           url: '/cobuy/index.php?r=ContactUs/addThisNewContactUsRequest',
           params: formPanel.getForm().getFieldValues(),
                       success: function(response){
        				var jsonResponse = Ext.decode(response.responseText);
                          if(jsonResponse.success){
                              var result = jsonResponse;
                              var msg = jsonResponse.msg;
        					  Ext.Msg.alert('Success!', msg);
                              win.close();


                          }else{
        						Ext.Msg.alert('ERROR', jsonResponse.msg);
        				  }
                   },
        		   failure: function(response, options) {
        				Ext.Msg.alert('Faulure Error', response.responseText);
        				}

            });
    },

    init: function(application) {
        this.control({
            "contactuswin button#sendBtn": {
                click: this.onSendingContactUsInformationButtonClick
            }
        });
    }

});