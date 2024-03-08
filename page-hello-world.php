<?php
get_header();
?>
<main>
  <?php
  the_title();
  the_content();
  ?>
  <h1>omg this is the hello world page</h1>
  <?php get_template_part('templates/test') ?>
</main>

<?php
get_footer();
