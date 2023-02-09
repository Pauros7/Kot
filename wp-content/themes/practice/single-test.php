<?php get_header(); ?>
<p style="font-family: 'Nunito Sans', sans-serif; font-size: 72px; text-align: center; margin-top: 1em;"><?php the_title(); ?><br>
<img src='<?php the_field('test_vector'); ?>' style='margin-top: 0.3em;'></p>

<?php
		while ( have_posts() ) :
			?>
			<div class="test_text">
				<?php
			the_post();
			get_template_part( 'template-parts/content', get_post_type() );
			?>
			</div>
			<?php

		endwhile; // End of the loop.
		?>
	
<p style="font-family: 'Nunito Sans', sans-serif; font-size: 48px; text-align: center;">Related Tests</p>
<div class="test_content">
<div class="test_row">
<?php
$args = array(
	'post_type'      => 'test',
	'posts_per_page' => 3,
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

<section class="contact">
<p style="font-family: 'Nunito Sans', sans-serif; font-size: 48px; text-align: center;">Contact</p>

<div class="contact_content">
<div class="contact_message"><form><input type="text" value="Full Name" />
<input type="text" value="E-mail" />
<textarea>Message</textarea>
<button>Send</button></form></div>
<div class="contact_info">

<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281080726!2d-0.24168024584704462!3d51.528771840474214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60LAg0JHRgNC40YLQsNC90ZbRjw!5e0!3m2!1suk!2sua!4v1675452681575!5m2!1suk!2sua" width="570" height="360" allowfullscreen="allowfullscreen"></iframe>
<div class="short_info">
<div class="short_info_item">

<img src="http://practice/wordpress/wp-content/uploads/2023/02/location.png" width="24" height="30" /><p>LSE Houghton Street London WC2A 2AE UK.</p>

</div>
<div class="short_info_item">

<img src="http://practice/wordpress/wp-content/uploads/2023/02/message.png" width="30" height="30" /><p>hello@gmail.com</p>

</div>
<div class="short_info_item">

<img src="http://practice/wordpress/wp-content/uploads/2023/02/phone.png" width="30" height="30" /><p> +44(20) 74057686</p>
</div>
</div>
</div>
</div>
</section>
<?php get_footer(); ?>