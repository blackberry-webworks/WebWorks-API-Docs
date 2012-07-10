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
 * @toc {User Interface} ContextMenu
 * @featureID blackberry.ui.contextmenu
 * @namespace The contextmenu namespace provides the facility
 *
 * <h3>Context Menu</h3>
 * <p>Webworks applications can choose to use an in app contextmenu as opposed to the default operating system menu. The
 * contextmenu provides several facilities to developers to allow them to control the elements that appear in the menu, as
 * well as listen to specific events related to the context menu being triggered and displayed.
 * <p>
 *
 * <h4>Enabling</h4>
 * <p>The contextmenu can be enalbed by calling the blackberry.ui.contextmenu.enabled property. When set to true, the
 * contextmenu will capture the context menu events, and pass any events that the user has registered for. When set to false
 * the contextmenu will default to the system, and the developer will have no access to the events described below.
 * </p>
 *
 * <h4>Events</h4>
 * Developers can subscribe to the following events:
 *</p>
 *
 *
 * <ul>
 *  <li>contextmenudisplayrequested</li>
 *  <li>contextmenuicondisplay</li>
 *  <li>contextmenufulldisplay</li>
 *  <li>contextmenuclosed</li>
 * </ul>
 *
 * <p>
 * These events allow developers to alter their user interface when the menu is triggered, as well as
 * relay the menu closing and opening to the underlying application.
 *</p>
 *
 */
blackberry.ui.contextmenu ={

/**
 * @description ContextMenuEnabled allows the developer to enabled and disable crosscut context menus for their application.
 * @param {boolean} enabled property that sets the contextmenu to enabled or disabled
 *
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function disabledContextMenu() {
 *     blackberry.ui.contextmenu.enabled = false;
 * }
 *
 * if(!blackberru.ui.contextmenu.enabled){
 *     console.log("context menu is currently disabled");
 *     }
 * &lt;/script&gt;
 *
 */
 enabled : function()

};
