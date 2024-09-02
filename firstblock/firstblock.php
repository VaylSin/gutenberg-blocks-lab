<?php 
/**
    * Plugin Name: First Block
    * Description: Premier plugin de block Gutemberg pour WordPress
    * Author: Skdigit
    * Version: 1.0
*/

function blocks_course_firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action("init", "blocks_course_firstblock_init");