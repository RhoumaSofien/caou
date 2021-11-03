=== SS WooCommerce Myaccount Ajax Tabs ===

Author: SaurabhSharma
Author URI: http://codecanyon.net/user/saurabhsharma
Tags: woocommerce ajax tabs, ajax tabbed content
Requires at least: 4.3
Tested up to: 5.2.3
Stable tag: 5.2.3


== Description ==

WooCommerce Myaccount Ajax Tabs is a clean, simple and light weight plugin which let's you customize WooCommerce myaccount tabs and convert them into ajax tabs.

As of WooCommerce 2.6+, the "My Account" links are shown in form of tabs. These tabs link to individual pages instead of inline content. This is where the plugin comes into action. Users can navigate through tab links without page refresh. The tab contents are fetched through ajax request and served on same page. Once all tabs are loaded, the plugin saves tab content and serves it without making duplicate ajax call. Thus, users can navigate through tabs multiple times without any load on server.

With WooCommerce Myaccount Ajax Tabs Plugin, you can easily customize myaccount tabs and add new tabs of your choice. The new custom tabs can be re-ordered using drag and drop sortable list. Furthermore, the tab content supports template overriding. i.e. if you wish to use custom php code in myaccount tabs, simply copy the php files in theme with same endpoint name and the plugin will detect it. The built in content area for tabs support HTML and Shortcodes.

The plugin works seamlessly with WordPress, WooCommerce and any decently coded theme. The total size of assets used in this plugin is no more than 60KB (out of which 28KB is the preloader image). It can be a good choice to give your visitors a good user experience, especially when you get a lot of traffic and server load.


== Key features ==

*	Fully compatible with WordPress 4.7+ and WooCommerce 2.6+
*	Works with all standard themes and decently coded premium themes
*	Converts WooCommerce my account tabs into ajax tabs
*	Supports AJAX internal links in Dashboard, Orders and Addresses tab
*	Saves tab content for multiple tab navigation (No repeated ajax calls)
*	Add unlimited new tabs of your choice
		- Re order tab positions using drag and drop sortable UI
		- Delete tabs of your choice or re add them any time
		- Add custom content for tabs. (Supports HTML, shortcodes and complex markup)
		- Override tab content by copying endpoint php file in theme
		- Re order WooCommerce default endpoints by deleting them from WooCommerce settings and re adding via this plugin
*   Plugin CSS and JS files can be limited to selective pages
*	Unbranded plugin settings page
*	Option for enabling or disabling ajax feature
*	Custom image preloader option
*	Custom error message via plugin settings
*	Admin can set ajax  timeout via plugin settings
*	Built in CSS styling for tab navigation. (Styles can be disabled from plugin settings)
*	Localization ready with sample .pot file included
*	Works on all modern browsers and IE9+ that support history API
*	Step by step documentation guide and installation manual
*   Dedicated support on time


== Plugin Support ==

All support is provided via comments section and email. For any questions related to the plugin or general query, feel free to email me from my profile page message box at http://codecanyon.net/user/saurabhsharma, or comment on the item comments section. I would be glad to respond. Thank you for browsing the plugin.


== Credits ==

* jQuery library (as shipped with WordPress)
  http://jquery.com/

* weDevs Settings API wrapper class
  http://tareq.weDevs.com Tareq's Planet


== Installation ==

For installation and setup, please refer to the documentation/index.html file inside your
main download archive.


== Changelog ==

= 2.1.0 =
* Added support for renaming and re-ordering native tabs
    - See documentation's FAQ section for details on how to rename and reorder native tabs

= 2.0.0 =
* Added option for disabling more link
    - See Settings > SS Ajax Tabs Settings > Display > More link
* Removed horizontal scrollbar from tab navigation when more link disabled

= 1.9.2 =
* Fixed: More button text made translation ready

= 1.9.1 =
* Fixed: More link shall hide when plugin's CSS is disabled
    NOTE: Themes may have a vertical or horizontal navbar with float layout. The more link needs horizontal navbar with flexbox layout. So disabling plugin CSS affects more link functionality, and needs to be disabled in that case.

= 1.9.0 =
* Ensured compatibility with WooCommerce 3.6.x and WordPress 5.2
* Added "More Link" to the Horizontal tabs
    - Adapts to the available tab nav width and automatically moves extra links into the submenu dropdown

= 1.8.1 =
* Added support for group endpoints in YITH Customize Myaccount Tabs Plugin
    - Supports AJAX loading on submenu items of YITH generated tabs

= 1.8.0 =
* Added option for disabling auto flushing of rewrite rules
  - See Settings > SS Ajax Tabs Settings > Custom Tabs
  - Auto flushing is resource consuming, so this feature will reduce server load
  - Permalinks can be flushed manually inside Settings > Permalinks > Save Changes

= 1.7.10 =
* Fixed: WPML Translated pages not showing in page list of plugin settings

= 1.7.9 =
* Added option for excluding tab links from ajax (Settings > SS Ajax Tabs Settings > General)

= 1.7.8 =
* Fixed compatibility with WooCommerce Memberships plugin
    - Removed ajax loading for "Back to memberships" link of the Membership plugin

= 1.7.7 =
* Added option for specifying custom link selectors for ajax loading (Settings > SS Ajax Tabs Settings > General)
* Fixed: Compatibility with WoodMart Theme

= 1.7.6 =
* Added option to disable caching of tab content (Settings > SS AJax Tabs Settings > General)
* Added sub-menu link for plugin settings inside WooCommerce main menu

= 1.7.5 =
* Added option to disable addres URL update when a tab is loaded (Settings > SS Ajax Tabs Settings > General)
* Fixed: WooCommerce error and info boxes hide when shown inside a tab

= 1.7.4 =
* Fixed: Exclude WoodMart Theme logout link from ajax
* Fixed: Double page titles shown when there are multiple account nav on same page

= 1.7.3 =
* Fixed: Address tab shall be active when clicked on "Edit" link
* Fixed: View order links showing same order details in cached content
* Optimized JS code 

= 1.7.2 =
* Fixed: Undfined JS variable for YITH Order Tracking plugin
* Added compatibility with WooCommerce Order Tracker plugin (CodeCanyon)

= 1.7.1 =
* Added compatibility with YITH WooCommerce Order Tracking plugin
   - Third party tracking links excluded from internal ajax loading
   - Added support for jQuery tooltip used in YITH tracking plugin
* Added ajax compatibility for WoodMart theme custom dashboard links
* Fixed language textdomain used in dashboard.php template

= 1.7.0 =
* Added CSS3 loading animation for tabs

= 1.6.0 =
* Added user role based tab hiding feature

= 1.5.0 =
* Added new feature for limiting plugin CSS and JS files to selected pages (Check General settings tab)

= 1.4.0 =
* Added new feature for adding custom myaccount tabs
* Added feature for re-ordering tabs using sortable drag and drop UI
* Added CSS for hiding scrollbar in menu bar on desktop

= 1.3.2 =
* Added internal ajax link support for "Orders" and "Addresses" tabs

= 1.3.1 =
* Document title and page entry title now updates according to selected tab
* Added option for specifying page title selector
* Added option for choosing whether to enable document title update or not

= 1.3.0 =
* Added ajax feature for internal links in dashboard tab.
	- Use "Settings > SS Ajax Tabs Settings > General > Ajax links in tab content"
* jQuery load() replaced with $.ajax()
	- Now supports sliders or JavaScript in ajax loaded content
	- Fully compatible with Visual Composer content, Rev Slider, etc. in my account content which is added via "YITH WooCommerce Customize My Account Page" plugin.

= 1.2.1 =
* Added id validation for tab names containing spaces and special characters

= 1.2.0 =
* Added support for "YITH WooCommerce Customize My Account Page" plugin

= 1.1.0 =
* Added 2 new tab styles (classic and flat)
* Added vertical orientation for all tab styles
* Added rtl support for vertical style tabs

= 1.0.0 =
* initial relese
