<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'caou' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ZqMrZKA&MEM$Tpy1p:2pje(PjJVOFI8*rR#_34mr_5V7sjVxr_b(juU7@ZG81KEf' );
define( 'SECURE_AUTH_KEY',  '{N>l&,yKub_z|2SkBE`~vk|{ %4,Q]o ;D7Ts|zMzrG1Mj>$S$6L8=+p$<{YU+2q' );
define( 'LOGGED_IN_KEY',    '97d,)%MNC`-(dtY,!*&.x-aSy_=:1_XlWc6SB[HrZ4+-@xo|OJ1@gJSHY=k.1-57' );
define( 'NONCE_KEY',        'OpG{1vDppd/G;Ul L>>n.j+DP[MK[Kn3&ew.GJ)1duSo=ei6Feo%.Bci#!|},ls&' );
define( 'AUTH_SALT',        '1V/3gL,E^c}jAy>^M@qs8Hh$WnJB$UjWUi{EZ-Jc}|Xk1(*IA4::R0=;9J0+hrIE' );
define( 'SECURE_AUTH_SALT', ';xq^d{V _k,yF+Si)9ALpM)*2!ag:;<Qr3te.r=O<XAP-l:aQLt Eb3Lt^NIo%T5' );
define( 'LOGGED_IN_SALT',   '*,s6cQvo7+T3w8?(b *|2#2^TWUoY#^=*x@agge`vZ=Q6Rw,>xS-/F*^;M0`z;&C' );
define( 'NONCE_SALT',       'S3A%<,@X|t/`B]4hW!aSZ)9gt{(UGujum`{yqN)F-hY]G&&KM6a,b-|uJ.z@E~8&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
