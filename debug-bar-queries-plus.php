<?php
/*
Plugin Name: Debug Bar Queries Plus
Version: 0.1
Description: A simple add-on for the Debug Bar plugin to make an enhanced queries dashboard
Author: Bradley Jacobs
Author URI: http://github.com/crazyjaco
Plugin URI: https://github.com/crazyjaco/debug-bar-queries-plus
*/

//namespace BGMP\Debug_Bar_Queries_Plus;


function add_dbqp_panel( $panels ) {
	require_once( 'panels/class-debug-bar-queries-plus.php' );
	$panels[] = new Debug_Bar_Queries_Plus();
	return $panels;
}
add_filter( 'debug_bar_panels', 'add_dbqp_panel' );

function dbqp_scripts( ) {
	wp_enqueue_script( 'debug-bar-queries-plus', plugins_url( 'js/debug-bar-queries-plus.js', __FILE__ ), array( 'debug-bar', 'jquery' ), '20170411', true );
	wp_enqueue_style( 'debug-bar-queries-plus', plugins_url( 'css/debug-bar-queries-plus.css', __FILE__ ), array( 'debug-bar' ), '20170411' );
}
add_action('debug_bar_enqueue_scripts', 'dbqp_scripts');
