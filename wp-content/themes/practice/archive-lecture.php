<?php get_header(); ?>
<div class="lecture_content"> 
<?php
$args = array(
	'post_type'      => 'lecture',
	'posts_per_page' => 50,
);
$loop = new WP_Query($args);
while ( $loop->have_posts() ) {
	$loop->the_post();
	?>
    

     
   
            <div class="lecture_item">

                <div class="lecture_image">
                    <img src="<?php the_field('lecture_icon'); ?>" width="371px" height="301px">
                </div>

                <div class="lecture_description">
                        <h2><?php the_field('lecture_title'); ?></h2>
                        <p><?php the_field('lecture_description'); ?></p>
                </div>

                <div class="lecture_info">
                    <h2><?php the_field('lecture_time'); ?></h2>
                    <h2><?php the_field('lecture_author'); ?></h2>
                    <div class="lecture_button">
                    <a href="<?php the_permalink(); ?>">Start now</a>
                </div>
                </div>
            </div>
    

    

	
	<?php
}
?>
</div>
<?php get_footer(); ?>