<?php

/* 
  Render function
  Displays all the teachers for both the page edit and live versions
*/


$query_args = array(
  'post_type' => 'teachers',
  'posts_per_page' => -1,
);

$query = new WP_Query($query_args);

if ($query->have_posts()) {
?>
  <div class="teacher-grid">
    <?php
    while ($query->have_posts()) {
      $query->the_post();
      $pronouns = strtoupper(get_field('pronouns'));
      $role = strtoupper(get_field('role'));
      $image = get_field('profile-picture')['url'];
    ?>
      <div class="teacher-card">
        <div class="teacher-image">
          <img src="<?php echo $image ?>" />
        </div>
        <h3 class="teacher-name"><?php the_title(); ?> (<?php echo $pronouns ?>)</h3>
        <h4 class="teacher-role"><?php echo $role ?></h4>
        <?php the_content(); ?>
      </div>
    <?php } ?>
  </div>
<?php }

wp_reset_postdata();
