/**
 * sswcmaat.admin.js
 *
 * @author SaurabhSharma
 * @version 2.1.0
 */
jQuery(function ($) {

    'use strict';

    var tab_count = 1;

    function sswcmaat_sortable_tabs() {
        $('.form-table').on('click', '#sswcmaat_add_tab', function (e) {
            e.preventDefault();
            var name_label = sswcmaat_localize ? sswcmaat_localize.name_label : 'Tab Name',
                endpoint_label = sswcmaat_localize ? sswcmaat_localize.endpoint_label : 'Endpoint Slug',
                content_label = sswcmaat_localize ? sswcmaat_localize.content_label : 'Tab Content',
                new_tab_label = sswcmaat_localize ? sswcmaat_localize.new_tab_label : 'Untitled Tab %num%',
                delete_text = sswcmaat_localize ? sswcmaat_localize.delete_text : 'Delete this tab',
                name_desc = sswcmaat_localize ? sswcmaat_localize.name_desc : 'The tab name as it appears in my account menu. E.g. My Offers',
                endpoint_desc = sswcmaat_localize ? sswcmaat_localize.endpoint_desc : 'The endpoint slug of tab name. E.g. my-offers',
                content_desc = sswcmaat_localize ? sswcmaat_localize.content_desc : 'The tab content. It can contain HTML and shortcodes. If you wish to use php markup, create a new file inside /wp-content/your_theme/woocommerce/myaccount/slug-name.php/ and place your custom code in the file. That will override the content placed in this textarea.',
				roles = sswcmaat_localize ? sswcmaat_localize.roles : '',
				roles_label = sswcmaat_localize ? sswcmaat_localize.roles_label : 'Hide this tab for',
				roles_desc = sswcmaat_localize ? sswcmaat_localize.roles_desc : 'Select user roles for which this tab shall be hidden. You can multi select using Ctrl + Click.',
				roles_dropdown = '',
                form = '',
                li = '';

            new_tab_label = new_tab_label.replace('%num%', tab_count);

			// Create dropdown for roles
			console.log(roles);
			roles_dropdown = '<select class="eproles" name="eproles" multiple>';
			roles = jQuery.parseJSON( roles );
			$.each( roles, function( key, value ) {
			  roles_dropdown += '<option value="' + key + '">' + value + '</option>'
			});
			roles_dropdown += '</select>';

            form = '<div class="sswcmaat-form-container"><p class="sswcmaat-form-row"><span class="sswcmaat-form-label">' + name_label + '</span><input class="epname" name="epname" type="text" value="" /><span class="description">' + name_desc + '</span></p><p class="sswcmaat-form-row"><span class="sswcmaat-form-label">' + endpoint_label + '</span><input class="epslug" name="epslug" type="text" value="" /><span class="description">' + endpoint_desc + '</span></p><p class="sswcmaat-form-row"><span class="sswcmaat-form-label">' + content_label + '</span><textarea class="epcontent" name="epcontent" rows="5" cols="55" ></textarea><span class="description">' + content_desc + '</span></p><p class="sswcmaat-form-row"><span class="sswcmaat-form-label">' + roles_label + '</span>' + roles_dropdown + '<span class="description">' + roles_desc + '</span></p></div>';

            li = '<li><span class="sswcmaat-tab-handle">' + new_tab_label + '<span class="sswcmaat-delete-btn">' + delete_text + '</span></span>' + form + '</li>';

            tab_count++;
            $(this).parent().parent().find('#sswcmaat-sortable-list').append(li);
            $(document).trigger('sswcmaat-tab-list-updated');
        });

        $('.form-table').on('click', '.sswcmaat-delete-btn', function (e) {
            e.preventDefault();
            $(this).parent().parent().remove();
            $(document).trigger('sswcmaat-tab-list-updated');
        });

        $('.epname,.epslug,.epcontent,.eproles').change(function () {
            $(document).trigger('sswcmaat-tab-list-updated');

        });

        $(document).on('keyup keypress change', 'input.epname, input.epslug, textarea.epcontent, select.eproles', function () {
            $(document).trigger('sswcmaat-tab-list-updated');
        });

        $('#sswcmaat-sortable-list').sortable({
            axis: "y",
            update: function (event, ui) {
                $(document).trigger('sswcmaat-tab-list-updated');
            }
        });

        $('#sswcmaat-sortable-list').on('click', '.sswcmaat-tab-handle', function (e) {
            e.preventDefault();
            //Expand or collapse this panel
            $(this).next().slideToggle();
            $(this).parent().parent().find('.sswcmaat-tab-handle').not($(this)).removeClass('active-handle');
            $(this).toggleClass('active-handle');
            //Hide the other panels
            $('.sswcmaat-form-container').not($(this).next()).slideUp();
        });
    }

    sswcmaat_sortable_tabs();

    // Update URL list for use in php
    function sswcmaat_update_tab_data() {
        var sswcmaat_data = $('#sswcmaat_custom_tabs\\[sswcmaat_tab_data\\]'),
            tab_arr = [],
            tab_li = $('#sswcmaat-sortable-list > li');

        if (tab_li.length) {
            $(tab_li).each(function () {
                tab_arr.push(JSON.stringify({
                    name: $(this).find('input.epname').val(),
                    slug: $(this).find('input.epslug').val(),
                    content: $(this).find('textarea.epcontent').val(),
					roles: $(this).find('select.eproles').val()
                }));
            });
        }

        sswcmaat_data.val(JSON.stringify(tab_arr));
    }

    $(document).on('ready sswcmaat-tab-list-updated', function () {
        sswcmaat_update_tab_data();
    });
});