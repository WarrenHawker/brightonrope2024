<?php
/* 
  Add all acf field definitions - this file then gets
  imported into functions.php 
*/

if (function_exists('acf_add_local_field_group')) {
  require_once(locate_template('acf-register-fields/post-type/teacher.php'));
}
