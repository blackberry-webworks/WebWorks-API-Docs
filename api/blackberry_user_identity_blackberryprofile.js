/*
* Copyright 2013 Research In Motion Limited.
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
* @toc {User Identity} User Identity - BlackBerry Profile
* @BB10X
* @namespace Use BlackBerry profile as an identity provider, and provide 
* off-device data storage.
*
* <p>BBProfile_Provider BlackBerry profile
* BlackBerry profile is an identity provider that allows access to
* off-device, encrypted storage space. The storage space is bound to the 
* BlackBerry ID user that is currently logged in. The storage is accessible 
* remotely from all devices logged in with the same BlackBerry ID user, 
* allowing applications installed on multiple devices access to the same 
* information.
*  
*
* <h3>User Identity API support</h3><br />
*
* <p>BlackBerry profile supports the following Identity Service functions. Using 
* BlackBerry profile with other functions will result in errors.<br />
* - createData()<br />
* - getData()<br />
* - setData()<br />
* - deleteData()<br />
* - listData()<br />
* - registerNotifier()
*
* 
* <h3>Off-device data storage and retrieval APIs</h3><br />
*
* <p>Applications can use the APIs to securely store data in, and retrieve data
* from, the BlackBerry ecosystem. APIs are provided for storing data initially
* (createData()), retrieving the data (getData()), updating the data
* (setData()), and removing the data (deleteData()).
*
*
* <h3>Permissions</h3><br />
*
* <p>In order to store and retrieve data off of the device, wireless data is
* consumed. Applications using storage from BlackBerry profile must have
* the access_internet permission included in their bar descriptor file.
*
* <h3>Limits to storage capacity</h3><br />
*
* <p>There's a limit to the amount of off-device storage that is available to
* each of your users. Storage limits are set according to user and app
* vendor, and apply to all of the apps that a user might have with a
* single vendor. For example, if you have multiple apps that require
* off-device storage, and you have a user who makes use of three of those
* apps, that user's storage limit applies to the total amount of storage
* space that those three apps require. Users can have multiple storage
* allocations, one for each app vendor.
*
*
* <h3>Caching</h3><br />
*
* <p>In cases where the application may need data stored locally for quick or 
* repeated access, the value can be cached securely on the device and 
* retrieved on demand, even when not connected to the remote storage copy. 
* The cache is synchronized with the remote copy so that the cache is always 
* up to date while the device has appropriate data coverage.
*
*
* <h3>Using profile storage</h3><br />
*
* <p><b>Create - Store a new entry</b><br />
* Call createData() to store new profile entries.<br />
*  - type is one of the "profile types".<br />
*  - flags are one of CREATE_DATA_ constants.<br />
*
* <p><b>Set - Update an entry</b><br />
* Call setData() to update profile entries.<br />
*  - type is one of the "profile types".<br />
*  - flags are one of SET_DATA_ constants.<br />
*
* <p><b>Get - Retrieve an entry</b><br />
* Call getData() to retrieve profile entries.<br />
*  - type is one of the "profile types".<br />
*  - flags are one of GET_DATA_ constants.<br />
*
* <p><b>Delete - Remove an entry</b><br />
* Call deleteData() to remove profile entries.<br />
*  - type is one of the "profile types".<br />
*  - flags are one of DELETE_DATA_ constants.<br />
*
* <p><b>Get - List available entries</b><br />
* Call listData() to list profile entries.<br />
*  - type is one of the "profile types".<br />
*  - flags are one of LIST_DATA_ constants.<br />
*
*
* <h3>Notifications</h3><br />
*
* <p>Notifications can be registered for entries either before or after they have
* been created. In cases where the registration is done after creation, the
* application is notified each time the value changes so that it can
* perform any necessary operations. If registration is done before an entry
* is created, the application is notified upon creation of the value as
* if it were an update. Additionally, registered applications receive a 
* change notification when an entry is deleted.
* 
* <p>To register for profile entry change notifications, call
* registerNotifier().<br />
*  - type is one of the "profile types".<br />
*  - flags are one of NOTIFY_ constants.<br />
*
* <p>Each time a registered entry changes, the registered callback function is 
* executed and the corresponding NOTIFICATION_ indicates the kind of change
* that occurred.
*
* @featureID blackberry.user.identity
* @permission access_internet Permits your app to use the internet to access user data
* in remote storage.
*/
blackberry.user.identity.blackberryprofile = {
};