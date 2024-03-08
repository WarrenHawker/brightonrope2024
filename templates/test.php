<?php
// Enqueue the test stylesheet
if ($_SERVER['HTTP_HOST'] === 'brighton-rope-2024.local') {
  wp_enqueue_style("test_styles", get_template_directory_uri() . '/src/CSS/modules/test.css', array(), '1.0', 'all');
} else {
  wp_enqueue_style("test_styles", get_template_directory_uri() . '/build/CSS/modules/test.css', array(), '1.0', 'all');
}


?>
<h1>this is the test template part</h1>