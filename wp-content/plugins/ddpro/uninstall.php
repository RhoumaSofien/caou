<?php
if ( defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    global $wpdb;
    $wpdb->query($wpdb->prepare( 'DELETE FROM ' . $wpdb->prefix.'options'. ' WHERE option_name LIKE %s', "%ddpro%" ));
    $wpdb->query($wpdb->prepare( 'DELETE FROM ' . $wpdb->prefix.'options'. ' WHERE option_name LIKE %s', "%ddp\\_%" ));
}