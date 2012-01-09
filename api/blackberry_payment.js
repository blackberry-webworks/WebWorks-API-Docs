/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @namespace
 * Entry point for purchasing digital goods.
 * <p>
 * API that permits BlackBerry device users to initiate the purchase of digital goods from within your application. For example, this API can be used to allow users to purchase additional levels in a gaming application, music from a radio application, or any other digital good registered on the Vendor Portal for BlackBerry App World. The digital good being purchased must be associated with the calling application in the Vendor Portal for BlackBerry App World.
 * <p>
 * Purchases are initiated via the purchase method. The amount of time that elapses before a response is returned depends on how quickly the user completes the purchase process (which may include steps such as signing in to their BlackBerry ID account and setting up their preferred billing method). The purchase method dispatches a callbackOnSuccess on success, or dispatches a callbackOnFailure on failure.
 * <p>
 * When calling the purchase method only the ID or SKU of the digital good to be purchased is required; it is not necessary to provide both, and all other arguments are optional. If both the ID and SKU are provided, then the ID takes precedence; the SKU is only used if the digital good could not be located on the Payment Service server based on the ID.
 * <p>
 * If an application requires a list of its digital goods that have already been purchased by the user (for example, to avoid offering for sale a digital good the user already owns), such a list can be obtained with the {@link blackberry.payment.getExistingPurchases} method. This method requires the same user interaction as the purchase method, so it can also be a long-running method.
 * @toc {Payment} Payment
 * @featureID blackberry.payment
 */
blackberry.payment = {

    /**
     * @function
     * @description Retrieves the previous successful purchases made by the user from within the calling application.
     * @param {Boolean} [refresh]  True if the BlackBerry should be allowed to refresh the list of purchases from the Payment Service server. False if the current list of cached purchases should be returned immediately.
     * @callback {function} callbackOnSuccess Function to be invoked on successful call.
     * @callback {String} callbackOnSuccess.data A string representing a literal array of {@link Purchase} items is passed as a parameter in the form below:
     * <pre>[{
     * "digitalGoodID": "123",
     * "digitalGoodSKU": "SKU_1",
     * "date": "1234567891011",
     * "licenseKey": null,
     * "metaData": "My Metadata",
     * "transactionID": "00000001"
     * },
     * {
     * "digitalGoodID": "456",
     * "digitalGoodSKU": "SKU_2",
     * "date": "1234567891011",
     * "licenseKey": null,
     * "metaData": "My Metadata",
     * "transactionID": "00000002"
     * }]</pre>
     * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
     * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
     * <b>Note:</b> The actual values may be different when {@link blackberry.payment.developmentMode} equals true.
	 * @since Version 1.0
     * @PB10+
	 * @BB50+
     */
    getExistingPurchases : function (refresh, callbackOnSuccess, callbackOnFailure) {
    },
    /**
     * @function
     * @description Initiates the purchase of a digital good.
     * @param {Object} args Contains information that describes the purchase.
     * @callback {String} args.digitalGoodID ID of the digital good being purchased.
     * @callback {String} args.digitalGoodSKU SKU of the digital good being purchased.
     * @callback {String} args.digitalGoodName Name of the digital good being purchased.
     * @callback {String} args.metaData Metadata associated with the digital good. Metadata offers the application developer a way to store information about each purchase on the Payment Service server.
     * @callback {String} args.purchaseAppName Name of the application requesting the purchase.
     * @callback {String} args.purchaseAppIcon Icon of the application requesting the purchase.
     * @callback {function} callbackOnSuccess Function to be called when the payment is successful.
     * @callback {String} callbackOnSuccess.data A string representing a {@link Purchase} object literal.
     * @callback {function} [callbackOnFailure] Function to be called when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
     * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since Version 1.0
     * @PB10+
     * @BB50+
     * @example
     * &lt;script type="text/javascript"&gt;
     *   function purchase() {
     *     try{
     *       blackberry.payment.purchase({
     *       "digitalGoodID":"123",
     *       "digitalGoodSKU":"someSKU",
     *       "digitalGoodName":"SomeName",
     *       "metaData":"metadata",
     *       "purchaseAppName":"WebWorks APP",
     *       "purchaseAppIcon":null},
     *       success,failure);
     *     }catch (e){
     *       alert ("Error" + e);
     *     }
     *  }
     *
     *  function success(purchase) {
     *    var purchasedItem = JSON.parse(purchase);
     *    var transId = purchasedItem.transactionID;
     *    var sku = purchasedItem.digitalGoodSKU;
     *    var dgId = purchasedItem.digitalGoodID;
     *    alert("Purchased Item: " + transId + "," + sku +  "," + dgId);
     *  }
     *
     *  function failure(errorText, errorId) {
     *    alert("Error occured: " + errorText + ", " + errorId);
     *  }
     * &lt;/script&gt;
     */
    purchase : function (args, callbackOnSuccess, callbackOnFailure) {
    },
	/**
	 * @function
	 * @description Initiates a request for the price of a digital good. The request can be initiated by using either the digital good ID or the digital good SKU to be purchased, but it is not necessary to provide both. 
	 * @param {Object} args Contains information about the digital good to query.
     * @callback {String} args.digitalGoodSKU SKU of the digital good to query.
	 * @callback {String} args.digitalGoodID ID of the digital good to query.
	 * @callback {function} callbackOnSuccess Function to be called when the price set is retrieved.
	 * @callback {String} callbackOnSuccess.data A string representing a price set object literal containing the localized formated price of the good or a set of items for a subscription is passed as a parameter in the form below: 
	 * <pre>[{
	 * "getFailureReason":"-224718155",
	 * "price":"$1.05",
	 * "returnCode":"-224718155",
	 * "statusMessage":"",
	 * "subscriptionInitialPeriod":"null",
	 * "subscriptionInitialPrice":"$1.05",
	 * "subscriptionPeriodName":"null",
	 * "subscriptionRenewalPrice":"null"
	 * }]</pre>.
     * @callback {function} [callbackOnFailure] Function to be called when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since Version 1.5.0
     * @PB10+
     * @BB50+
	 * @example
     * &lt;script type="text/javascript"&gt;
     *   function getPrice() {
     *     try{
     *       blackberry.payment.getPrice({"digitalGoodSKU":"someSKU"}, success, failure);
     *     }catch (e){
     *       alert ("Error" + e);
     *     }
     *  }
     *
     *  function success(priceSet) {
     *    var digitalGoodPS = JSON.parse(priceSet);
     *    var price = digitalGoodPS.price;
	 *    var subscriptionInitialPrice = digitalGoodPS.subscriptionInitialPrice;
	 *    var subscriptionInitialPeriod = digitalGoodPS.subscriptionInitialPeriod;
	 *    var subscriptionRenewalPrice = digitalGoodPS.subscriptionRenewalPrice;
	 *
	 *    var output = "Price: " + price 
	 *	      + "\nSubscription Initial Price: " + subscriptionInitialPrice
	 *	      + "\nSubscription Initial Period: " + subscriptionInitialPeriod 
	 *	      + "\nSubscription Renewal Price: " + subscriptionRenewalPrice;
	 *				
     *    alert(output);
     *  }
     *
     *  function failure(errorText, errorId) {
     *    alert("Error occured: " + errorText + ", " + errorId);
     *  }
     * &lt;/script&gt;
	 */
	getPrice : function( args, callbackOnSuccess, callbackOnFailure ) {
	},
	/**
	 * @function
	 * @description Returns a {@link Purchase} object if the user who is logged in with a BlackBerry ID has rights for this digital good SKU at the time of calling this method. The result is based on the default business rules defined by the Payment Service server or BlackBerry App World. For example, in the case of a subscription, a "Canceled" subscription will return true until the next renewal date. All "Refunded" SKUs will return false immediately.
	 * @param {String} sku of the digital good to query.
	 * @callback {function} callbackOnSuccess Function to be called when the price set is retrieved.
	 * @callback {String} callbackOnSuccess.data A string representing a digital good object literal is passed as a parameter in the form below:
     * <pre>[{
	 * "digitalGoodID":"123456",
	 * "digitalGoodSKU":"Some_SKU",
	 * "date":"1322066643848",
	 * "licenseKey":"Single License Key",
	 * "metaData":"Some metadata",
	 * "transactionID":"10101"
	 * }]</pre>.
     * @callback {function} [callbackOnFailure] Function to be called when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since Version 1.5.0
     * @BB50+
	 * @example
     * &lt;script type="text/javascript"&gt;
     *   function get() {
     *     try{
     *       blackberry.payment.getPurchaseDetails("Some_SKU", success, failure);
     *     }catch (e){
     *       alert ("Error" + e);
     *     }
     *  }
     *
     *  function success(purchase) {
     *    var o = JSON.parse(purchase);
     *    var id = o.digitalGoodID;
	 *    var sku = o.digitalGoodSKU;
	 *    var date = o.date;
	 *    var license = o.licenseKey;
	 *    var metadata = o.metadata;
	 *    var transactionID = o.transactionID;
	 *
	 *    var output = "ID: " + id 
	 *	      + "\nSKU: " + sku
	 *	      + "\nDate: " + date
	 *	      + "\nLicense: " + license
	 *	      + "\nMetadata: " + metadata
	 *	      + "\nTransaction ID: " + transactionID;
	 *				
     *    alert(output);
     *  }
     *
     *  function failure(errorText, errorId) {
     *    alert("Error occured: " + errorText + ", " + errorId);
     *  }
     * &lt;/script&gt;
	 */
	getPurchaseDetails : function( digitalGoodSKU, callbackOnSuccess, callbackOnFailure ) {
	},
	/**
	 * @function
	 * @description Initiates a request to cancel the digital good subscription given it's TransactionID.
	 * @param {String} transactionID the transaction id of the digital good you would like to cancel
	 * @callback {function} callbackOnSuccess Function to be called when the transaction is cancelled
     * @callback {function} [callbackOnFailure] Function to be called when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since Version 1.5.0
     * @BB50+
	 * @example
     * &lt;script type="text/javascript"&gt;
     *   function cancelSubscription() {
     *     try{
     *       blackberry.payment.cancelSubscription("transaction_id", success, failure);
     *     }catch (e){
     *       alert ("Error" + e);
     *     }
     *  }
     *
     *  function success(purchase) {
	 *    var o = JSON.parse(purchase);
	 *    var transactionID = o.transactionID;
     *    alert("Transaction " + transactionID + " has been cancelled");
     *  }
     *
     *  function failure(errorText, errorId) {
     *    alert("Error occured: " + errorText + ", " + errorId);
     *  }
     * &lt;/script&gt;
	 */
	cancelSubscription : function ( transactionID, callbackOnSuccess, callbackOnFailure ) {
	},
	 /**
     * @function
     * @description Retrieves a listing of digital goods available for the calling application.
     * @callback {function} callbackOnSuccess Function to be invoked on successful call.
     * @callback {String} callbackOnSuccess.data A string representing a literal array of {@link DigitalGood} items is passed as a parameter in the form below:
     * <pre>[{
     * "sku": "SKU_1",
     * "vendor": "Vendor_1",
     * "name": "DG_1",
     * "shortDescription": "DG_1 short desc.",
     * "longDescription": "This is the long description for DG_1",
     * "price": "$1.00",
	 * "subscriptionInitialPrice": "$4.99",
	 * "subscriptionRenewalPrice": "$1.99",
	 * "subscriptionPeriod": "30 days",
	 * "subscriptionInitialPeriod": "3 days"
     * },
     * {
     * "sku": "SKU_2",
     * "vendor": "Vendor_2",
     * "name": "DG_2",
     * "shortDescription": "DG_2 short desc.",
     * "longDescription": "This is the long description for DG_2",
     * "price": "$2.00",
	 * "subscriptionInitialPrice": "$4.99",
	 * "subscriptionRenewalPrice": "$1.99",
	 * "subscriptionPeriod": "30 days",
	 * "subscriptionInitialPeriod": "3 days"
     * }]</pre>
     * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since version 1.8.0
	 * @BB50+
     */
    getDigitalGoods : function (callbackOnSuccess, callbackOnFailure) {
    },
	/**
     * @function
     * @description Retrieve the user's purchase history for the calling application as well as any digital goods associated with the application.
     * @callback {function} callbackOnSuccess Function to be invoked on successful call.
     * @callback {String} callbackOnSuccess.data A string representing a literal array of {@link Purchase} items is passed as a parameter in the form below:
     * <pre>[{
     * "digitalGoodID": "123",
     * "digitalGoodSKU": "SKU_1",
     * "date": "1234567891011",
     * "licenseKey": null,
     * "metaData": "My Metadata",
     * "transactionID": "00000001"
     * },
     * {
     * "digitalGoodID": "456",
     * "digitalGoodSKU": "SKU_2",
     * "date": "1234567891011",
     * "licenseKey": null,
     * "metaData": "My Metadata",
     * "transactionID": "00000002"
     * }]</pre>
     * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since version 1.8.0
	 * @BB50+
     */
    getPurchaseHistory : function (callbackOnSuccess, callbackOnFailure) {
    },
	/**
     * @function 
     * @description Invokes callbackOnSuccess if the user who is logged in with a BlackBerry ID has rights for this digital good SKU at the time of calling this method.
	 * @param {String} sku the SKU of the digital goods requested 
	 * @callback {function} callbackOnSuccess Function to be invoked on successful call.
	 * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
     * @since Version 1.5.0
	 * @BB50+
	 */
	checkExisting : function (digitalGoodSKU, callbackOnSuccess, callbackOnFailure) {
	},
	/**
	 * @function
	 * @description Starts the process of upgrading BlackBerry App World to the current version by opening the browser on the device to the BlackBerry App World upgrade page.
	 * @callback {function} callbackOnSuccess Function to be invoked on successful call.
	 * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since Version 1.5.0
	 * @BB50+
	 */
	updateAppWorld : function( callbackOnSuccess, callbackOnFailure) { 
	},
	/**
	 * @function
	 * @description Invokes the callbackOnSuccess if the BlackBerry App World client is installed and at the correct verison.  
	 * @callback {function} callbackOnSuccess Function to be invoked on successful call.
	 * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
	 * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
	 * @since version 1.5.0
	 * @BB50+
	 */
	isAppWorldInstalledAndAtCorrectVersion : function( callbackOnSuccess, callbackOnFailure) {
	},
	/**
	 * @function
	 * @description Sets the debug flag to true to show debug information via alert dialogs during development.
	 */
	setDebugTrue : function() {
	},
	/**
	 * @function
	 * @description Sets the debug flag to false to hide debug information from being shown.
	 */
	setDebugFalse : function() {
	},
};

/**
 * @namespace This object encapsulates the attributes of a purchase.
 * <p>
 * It may be aquired by calling to one of the {@link blackberry.payment} methods.
 * @toc {Payment} Purchase
 * @featureID blackberry.payment
 */
Purchase = { };

/**
 * @type String
 * @description The transaction ID for this purchase.
 * @PB10+
 * @BB50+
 */
Purchase.prototype.transactionID = null;

/**
 * @type String
 * @description The ID of the purchased digital good.
 * @PB10+
 * @BB50+
 */
Purchase.prototype.digitalGoodID = null;

/**
 * @type String
 * @description The SKU of the purchased digital good.
 * @PB10+
 * @BB50+
 */
Purchase.prototype.digitalGoodSKU = null;

/**
 * @type String
 * @description The metadata for this purchase, or null if no metadata was included with the purchase.
 * @PB10+
 * @BB50+
 */
Purchase.prototype.metaData = null;

/**
 * @type String
 * @description The Epoch time represention of the date this purchase was made.
 * @PB10+
 * @BB50+
 */
Purchase.prototype.date = null;

/**
 * @type String
 * @description Represents the license key for this purchase, or null if the purchased digital good does not have a license key.
 * @PB10+
 * @BB50+
 */
Purchase.prototype.licenseKey = null;

/**
 * @namespace This object encapsulates the attributes of a digital good.
 * <p>
 * It may be aquired by calling to one of the {@link blackberry.payment.digitalgoods} methods.
 * @toc {Payment} DigitalGood
 * @featureID blackberry.payment.digitalgoods
 */
DigitalGood = { };

/**
 * @type String
 * @description The sku of the digital good.
 * @BB50+
 */
DigitalGood.prototype.sku = null;

/**
 * @type String
 * @description The vendor of the digital good.
 * @BB50+
 */
DigitalGood.prototype.vendor = null;

/**
 * @type String
 * @description The name of the digital good.
 * @BB50+
 */
DigitalGood.prototype.name = null;

/**
 * @type String
 * @description The short description of the digital good.
 * @BB50+
 */
DigitalGood.prototype.shortDescription = null;

/**
 * @type String
 * @description The long description of the digital good.
 * @BB50+
 */
DigitalGood.prototype.longDescription = null;

/**
 * @type String
 * @description The price of the digital good.
 * @BB50+
 */
DigitalGood.prototype.price = null;

/**
 * @type String
 * @description The initial price of the subscription for the digital good, or null if this digital good is not a subscription item.
 * @BB50+
 */
DigitalGood.prototype.subscriptionInitialPrice = null;

/**
 * @type String
 * @description The renewal price of the subscription for the digital good, or null if this digital good is not a subscription item.
 * @BB50+
 */
DigitalGood.prototype.subscriptionRenewalPrice = null;

/**
 * @type String
 * @description The lenght of the subscription for the digital good, or null if this digital good is not a subscription item.
 * @BB50+
 */
DigitalGood.prototype.subscriptionPeriod = null;

/**
 * @type String
 * @description The intial subscription period for the digital good, or null if this digital good is not a subscription item.
 * @BB50+
 */
DigitalGood.prototype.subscriptionInitialPeriod = null;
