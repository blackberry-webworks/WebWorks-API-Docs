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
* @toc {User Identity} User Identity - BlackBerry ID
* @BB10X
* @namespace Use BlackBerry ID as an identity provider for your application.
*
* <p>Using the BlackBerry ID service as an identity provider, you can enhance 
* your app in several ways:<br />
* - Provide secure, off-device data storage and retrieval within the 
* BlackBerry ecosystem.<br />
* - Provide user authentication within your app, without prompting for 
* user credentials. <br />
* - Provide user authorization to access other BlackBerry apps and off-device 
* services without prompting for user credentials.<br />
* - Provide access to users' personal information that is stored in the 
* BlackBerry ID account system. User permission to access this information 
* is required. 

*
* <h3>User authentication without prompting for credentials</h3><br />
*
* <p>Benefits of implementing BlackBerry ID user authentication:<br />
* - Eliminate the need to build your own username and password management.<br />
* - Automatically sign users in to your app after they sign in with their
* BlackBerry ID account on their devices. This makes your app easier to use.<br />
* - Eliminate the need for users to create and remember a username and 
* password for your app.
* 
* <h3>User authorization to access other BlackBerry apps and off-device services</h3><br />
*
* <p>If your app interacts with an off-device service that requires user
* authentication (for example, a website that requires the user to sign in
* with a username and password), you can use BlackBerry ID APIs to perform
* the off-device authentication/authorization using tokens, instead of
* prompting the user for credentials. Your app and the off-device service
* interact seamlessly.
*
* <h3>Access personal information associated with BlackBerry ID accounts</h3><br />
*
* <p>You can personalize the user experience of your app by incorporating your 
* users' personal information in your app. Users must allow your app to 
* access the information associated with their BlackBerry ID accounts before 
* you can access it. The application must have the
* read_personally_identifiable_information permission included in their bar
* descriptor. The information that is available includes:<br />
* - first name<br />
* - last name<br />
* - screen name<br />
* - username (an email address)<br />
*
* <p>The getProperties() function can be used to retrieve personal
* information stored in the BlackBerry ID account system, with
* CORE_PROPERTY_TYPE passed as the type parameter.
*
* @featureID blackberry.user.identity
* @permission read_personally_identifiable_information Permits your app to access user
* identity information including the ability to store secondary user properties.
* @permission access_internet Permits your app to use the internet to access user data
* in remote storage.
*/
blackberry.user.identity.blackberryid = {
};