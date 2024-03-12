<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo("charset"); ?>">
  <meta name="viewport" content="width=device-width" , initial-scale="1" ;>
  <title>Brighton Rope - Learn, Tie Connect</title>
  <?php wp_head(); ?>
</head>

<body>
  <header>
    <nav class="top-nav">
      <a class="top-nav-logo" href="<?php echo get_home_url() ?>">
        <?php $custom_logo_id = get_theme_mod('custom_logo');
        $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
        if (has_custom_logo()) {
          echo '<img src="' . esc_url($logo[0]) . '" width="70px" height="70px" alt="brighton rope logo">';
        } else {
          echo '<h1>' . get_bloginfo('name') . '</h1>';
        } ?>

      </a>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <?php wp_nav_menu(array('theme_location' => 'top-nav', 'container' => '', 'menu_id' => 'top-nav-menu')); ?>
      </div>
    </nav>
  </header>