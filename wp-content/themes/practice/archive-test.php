<?php get_header(); ?>

<p style="font-family: 'Nunito Sans', sans-serif; font-size: 48px; text-align: center; margin-top: 2em;">Tests</p>
<div class="test_content" style='margin-bottom: 5em;'>
<div class="test_row">	
<?php
$args = array(
	'post_type'      => 'test',
	'posts_per_page' => 50,
);
$loop = new WP_Query($args);
while ( $loop->have_posts() ) {
	$loop->the_post();
	?>
    

  <a href='<?php the_permalink(); ?>'>
<div class="test_item" style="background-image: url('<?php the_field('test_icon'); ?>');">
<div class="test_info">
<h2><?php the_field('test_title'); ?></h2>
<p><?php the_field('test_description'); ?></p> 

</div>
</div>



</a>

	
	<?php
}
?>
</div>
</div>



<?php get_footer(); ?>