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
 * @toc {Advertising} Banner
 * @featureID blackberry.advertising
 * @class The Banner object is an advertising banner object that will automatically get inserted into a div in your html.
 * @constructor
 * @description Creates a new Banner Object with the given properties and automatically inserts it into the div with the specified id.
 * @param {Number} appID The Application ID given to the developer by the BBAS on registration.
 * @param {String} divID The id attribute of the div tag to which the banner will be inserted.
 * @param {JSON} [properties] A set of options to further customize the advertising banner.
 * @param {Boolean} [properties.bannerTransitions] Sets the {@link blackberry.advertising#bannerTransitions} property.
 * @param {String} [properties.focusBorderColor] Sets the {@link blackberry.advertising#focusBorderColor} property.
 * @param {String} [properties.focusBorderWidth] Sets the {@link blackberry.advertising#focusBorderWidth} property.
 * @param {JSON} [properties.metadata] Sets the {@link blackberry.advertising#metadata} property.
 * @param {String} [properties.mmaSize] Sets the {@link blackberry.advertising#mmaSize} property.
 * @param {String} [properties.placeholder] Sets the {@link blackberry.advertising#placeholder} property.
 * @param {Number} [properties.refreshRate] Sets the {@link blackberry.advertising#refreshRate} property.
 * @BB60+
 * @example
 * &lt;center&gt; &lt;div id='bannerDiv'&gt;     &lt;/div&gt; &lt;/center&gt;
 * &lt;script type="text/javascript"&gt;
 * 
 *  //Adding Banner with default Banner properties
 *  var banner1 = banner(16126, "bannerDiv");   
 * 
 *  //Adding Banner with custom Banner properties
 *  var banner1 = new blackberry.advertising.Banner(16126, "bannerDiv", {"bannerTransitions" : true,
 *                                                                 "mmaSize" : "extralarge",
 *                                                                 "focusBorderColor" : "blue",
 *                                                                 "focusBorderWidth" : "2px",
 *                                                                 "refreshRate" : 6000,
 *                                                                 "placeholder" : "http://test.com/placeholder.jpg"},
 *                                                                 "metadata": {"age" : "12",
 *                                                                              "gender" : "male",
 *                                                                              "city" : "SanFrancisco"}
 *                                                                };
 *  
 * &lt;/script&gt;
 */
blackberry.advertising ={};

/**
 * @field
 * @description Determines whether banner transitions will be enabled.
 * @type Boolean
 * @default false
 * @BB60+
 */
blackberry.advertising.prototype.bannerTransitions = undefined;

/**
 * @field
 * @description Specifies the focus border colour of the Advertising Banner. Both RGB (ie #667766) and colour names (ie blue) are valid.
 * @type String
 * @default 'blue'
 * @BB60+
 */
blackberry.advertising.prototype.focusBorderColor = undefined;

/**
 * @field
 * @description Sets the border width of the banner when focused.
 * @type String
 * @default '2px'
 * @BB60+
 */
blackberry.advertising.prototype.focusBorderWidth = undefined;

/**
 * @field
 * @description Specify the metadata (key/value pairs) for more targeted Advertisement.
 * @type JSON
 * @BB60+
 */
blackberry.advertising.prototype.metadata = undefined;

/**
 * @field
 * @description Specify the size of the banner. Should be one of;
 * <ul>
 * <li>"small"</li>
 * <li>"medium"</li>
 * <li>"large"</li>
 * <li>"extralarge"</li>
 * <li>"extraextralarge"</li>
 * <li>"auto"</li>
 * </ul>
 * @type String
 * @default "auto"
 * @default "MMA_SIZE_AUTO_SIZE"
 * @BB60+
 */
blackberry.advertising.prototype.mmaSize = undefined;

/**
 * @field
 * @description Set temporary place holder URL for the banner.
 * @type String
 * @BB60+
 */
blackberry.advertising.prototype.placeholder = undefined;

/**
 * @field
 * @description Set the banner refresh time in miliseconds. The timer cannot be set to less than 60000 ms.
 * @type Number
 * @default 60000
 * @BB60+
 */
blackberry.advertising.prototype.refreshRate = undefined;
