/*!
 * Login Window
 */

/*global Ext, Application */
Ext.ns('Ssa');

Ssa.Login = Ext.extend(Ext.FormPanel, {
				        title: 'Please Login',
                id: 'login', // see Ext.getCmp() below
				        labelWidth: 100,
				        labelAlign: 'top',
				        layout: 'form',
				        //region: 'center',
				        split: true,
				        margins: '0 0 0 5',
				        //height: 300,
				        frame: false,
				        collapsible: false,
				        padding: 5,
                buttonAlign: 'center',
				        defaultType: 'textfield',
								//monitorValid: true,
								// Specific attributes for the text fields for username / password. 
								// The "name" attribute defines the name of variables sent to the server.
				        /**
				         * Initializes the component.
				         */
				        initComponent: function() {
				            this.items = [
				            	{ 
				                fieldLabel: 'Username', 
				                name: 'loginUsername', 
				                allowBlank: false,
				                vtype: 'name'
					            },
					            { 
				                fieldLabel: 'Password', 
				                name: 'loginPassword', 
				                inputType: 'password', 
				                allowBlank: false,
				                vtype: 'password',
				                scope: this,
				                listeners: {
                          specialkey: function(field, e){
                            if (e.getKey() == e.ENTER) {
                              Ext.Msg.alert("Alert", "Enter Key Event !");
                              Ext.getCmp('login').authSubmit();
                            }
                          }
                        }
					            },
					            /*
					            { 
				                id: 'newPassword',
				                fieldLabel: 'New Password', 
				                name: 'newPassword', 
				                inputType: 'password', 
				                hidden: true,
				                allowBlank: true,
				                vtype: 'password'
					            },
					            { 
				                fieldLabel: 'Re-type New Password', 
				                name: 'newPassword2', 
				                inputType: 'password', 
				                hidden: true,
				                allowBlank: true,
				                vtype: 'password'
					            },
					            */
					            { 
				                name: 'xaction', 
				                inputType: 'hidden', 
				                hidden: true,
				                value: 0 
					            }
					          ];
										// All the magic happens after the user clicks the button     
						       	this.buttons = [
						       	  { 
				                id: 'login-btn',
				                text:'Login',
				                formBind: true,
				                // Function that fires when user clicks the button 
				                handler: this.authSubmit,
				                scope: this
				            	},
						       	  { 
				                text:'Register',
				                formBind: true,
				                hidden: (!allowOnlineReg),
				                handler: function() {
				                  window.location = 'register.php';
				                },
				                scope: this
				            	}
				            ];
				            //this.keys = [{ key: [Ext.EventObject.ENTER], handler: function() {  Ext.Msg.alert("Alert", "Enter Key Event !"); } }];
						        Ssa.Login.superclass.initComponent.call(this, arguments);
				        },
								authSubmit: function() { 
									var form = Ext.getCmp('login').getForm();
									if (form.isValid()) {
                    form.submit({ 
                      url: 'libs/login.php',
                      method:'POST',
                      waitTitle:'Connecting', 
                      waitMsg:'Sending data...',

											// Functions that fire (success or failure) when the server responds. 
											// The one that executes is determined by the 
											// response that comes from login.php as seen below. The server would 
											// actually respond with valid JSON, 
											// something like: response.write "{ success: true}" or 
											// response.write "{ success: false, errors: { reason: 'Login failed. Try again.' }}" 
											// depending on the logic contained within your server script.
											// If a success occurs, the user is notified with an alert messagebox, 
											// and when they click "OK", they are redirected to whatever page
											// you define as redirect. 

											success: function(form, action) { 
												obj = Ext.util.JSON.decode(action.response.responseText); 
												if (obj.warning_page.show) {
							          	Ext.Msg.show({
														title: 'Warning',
														width: 500,
														msg: obj.warning_page.html,
														closable: false,
														modal: true,
														fn: function(btn, text, opt) {
													    if (btn == 'ok') {
													    	window.location = 'desktop.php';
													    } else {
													    	window.location = 'libs/logout.php';
													    }
														},
														buttons: {ok: 'Proceed', cancel: 'Exit'}
													});
												} else {
													window.location = 'desktop.php';
												}
											},

											// Failure function, see comment above re: success and failure. 
											// You can see here, if login fails, it throws a messagebox
											// at the user telling him / her as much.  

                      failure: function(form, action){ 
                        if(action.failureType == 'server'){ 
                          obj = Ext.util.JSON.decode(action.response.responseText); 
                        	switch (obj.errors.reason.substr(0, 16)) {
                        		case 'Password expired':
                        			Ext.Msg.alert('Login Failed!', obj.errors.reason, function() {
							                  var fp = Ext.getCmp('login');
							                  var form = fp.getForm();
							                  //fp.setHeight(400);
							                  form.findField('xaction').setValue(1);
							                  form.findField('loginPassword').hide();
							                  //form.findField('newPassword2').show();
							                  //form.findField('newPassword').show();
							                  fp.add([
											            { 
										                id: 'newPassword',
										                fieldLabel: 'New Password', 
										                name: 'newPassword', 
										                inputType: 'password', 
										                allowBlank: false,
										                vtype: 'password'
											            },
											            { 
										                fieldLabel: 'Re-type New Password', 
										                name: 'newPassword2', 
										                inputType: 'password', 
										                allowBlank: false,
										                vtype: 'password'
											            }
							                  ]);
							                  fp.doLayout();
                        			}); 
                        			break;
                        		default:
                          		Ext.Msg.alert('Login Failed!', obj.errors.reason); 
                          };
                        } else { 
                          Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText); 
                        }
                  		}
                  	});
	                } else {
	                  	Ext.Msg.alert('Warning!', 'Please enter Username and Password');
	                }
              	}
    				});

Ext.reg('login', Ssa.Login);

