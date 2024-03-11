<?php

/* 
  Teacher custom post type

*/

if (function_exists('acf_add_local_field_group')) {
  acf_add_local_field_group([
    'key' => "group_1",
    'title' => "Teacher Details",
    'fields' => array(
      array(
        'key' => 'pronouns',
        'label' => 'Pronouns',
        'name' => 'pronouns',
        'type' => 'text',
        'required' => 1,
      ),
      array(
        'key' => 'role',
        'label' => 'Role',
        'name' => 'role',
        'type' => 'select',
        'required' => 1,
        'choices' => array(
          'rigger' => 'Rigger',
          'bottom' => 'Bottom',
          'rigger/bottom' => 'Rigger / Bottom',
          'switch' => 'Switch',
          'bunny' => 'Bunny',
          'model' => 'Model',
          'top' => 'Top'
        )
      ),
      array(
        'key' => 'profile-picture',
        'label' => 'Profile Picture',
        'name' => 'profile-picture',
        'required' => 1,
        'type' => 'image',
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_type',
          'operator' => '==',
          'value' => 'teachers',
        ),
      ),
    ),
    'menu_order' => 0,
    'active' => true,
  ]);
};
