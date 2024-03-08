<?php

//register top nav menu
function register_top_nav_menu()
{
  register_nav_menu('top-nav', __('Top Nav Menu'));
}
add_action('init', 'register_top_nav_menu');

//remove "Posts" from admin dashboard
function remove_posts_admin()
{
  remove_menu_page('edit.php');
}
add_action('admin_menu', 'remove_posts_admin');

//remove "Comments" from admin dashboard
function remove_comments_admin()
{
  remove_menu_page('edit-comments.php');
}
add_action('admin_init', 'remove_comments_admin');

//remove support for comments
function remove_comment_support()
{
  remove_post_type_support('post', 'comments');
  remove_post_type_support('page', 'comments');
}
add_action('init', 'remove_comment_support', 100);



//register "Teacher" post type
function register_teacher_post_type()
{
  register_post_type('teachers', array(
    'public' => true,
    'supports' => array('title', 'editor'),
    'show_in_rest' => false,
    //true uses new block editor, false uses classic editor
    'menu_icon' => 'dashicons-groups',
    'labels' => array(
      'name' => 'Teachers',
      'edit_item' => 'Edit Teacher',
      'all_items' => 'All Teachers',
      'singular_name' => 'Teacher',
      'add_new' => __('Add New Teacher', 'textdomain'),
    )
  ));
}
add_action('init', 'register_teacher_post_type');


/* 
Enqueues global styles and scripts for all pages

If in development (based on URL - brighton-rope-2024.local), the files are enqueued from the "src" folder.

If in production (based on URL - NOT brighton-rope-2024.local), the files are enqueued from the "build" folder.

Mobile nav styles are only loaded on screen width less than 600
*/
function global_styles_and_scripts()
{
  wp_enqueue_style('open-sans-font', '//fonts.googleapis.com/css?family=Open+Sans');
  wp_enqueue_script('font-awesome-kit', 'https://kit.fontawesome.com/0de87d0496.js', array(), '5.15.4', true);
  if ($_SERVER['HTTP_HOST'] === 'brighton-rope-2024.local') {
    wp_enqueue_style("global_styles", get_template_directory_uri() . '/src/CSS/globals/globals.css', array(), '1.0', 'all');
    wp_enqueue_script('custom-script', get_template_directory_uri() . '/src/JS/index.js', array(), '1.0', true);
    wp_enqueue_style("mobile_nav_styles", get_template_directory_uri() . '/src/CSS/globals/mobile-nav.css', array(), '1.0', 'screen and (max-width: 600px)');
  } else {
    wp_enqueue_style("global_styles", get_template_directory_uri() . '/build/CSS/globals.min.css', array(), '1.0', 'all');
    wp_enqueue_script('custom-script', get_template_directory_uri() . '/build/JS/index.min.js', array(), '1.0', true);
    wp_enqueue_style("mobile_nav_styles", get_template_directory_uri() . '/build/CSS/mobile-nav.min.css', array(), '1.0', 'screen and (max-width: 600px)');
  }
}
add_action('wp_enqueue_scripts', 'global_styles_and_scripts');


//add custom logo support to theme
add_theme_support('custom-logo');
function themename_custom_logo_setup()
{
  $defaults = array(
    'height'               => 100,
    'width'                => 400,
    'flex-height'          => true,
    'flex-width'           => true,
    'header-text'          => array('site-title', 'site-description'),
    'unlink-homepage-logo' => true,
  );
  add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'themename_custom_logo_setup');

//register custom blocks
function register_custom_blocks()
{
}
add_action('init', 'register_custom_blocks');
