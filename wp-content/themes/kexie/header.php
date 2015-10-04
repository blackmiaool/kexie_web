<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/kx-header.css"  rel="stylesheet">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> data-kx-page="home">
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentyfifteen' ); ?></a>
	<div id="sidebar" class="sidebar">
		<header id="masthead" class="site-header" role="banner">
			<div class="site-branding">
				<?php
					if ( is_front_page() && is_home() ) : ?>
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php endif;

					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) : ?>
						<p class="site-description"><?php echo $description; ?></p>
					<?php endif;
				?>
				<button class="secondary-toggle"><?php _e( 'Menu and widgets', 'twentyfifteen' ); ?></button>
			</div><!-- .site-branding -->
		</header><!-- .site-header -->

		<?php get_sidebar(); ?>
	</div><!-- .sidebar -->
    <div id="kx-header" class="header-home">
    <div class="wrap">
        <ul>
            <li style="display:none;"><a href="/" class="brand">IC&#x79D1;&#x534F;</a></li>
            <li><a href="/" class="item selected"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>&#xA0;首页</a></li><li><a href="mediawiki/" class="item false"><span class="glyphicon glyphicon-book" aria-hidden="true"></span>&#xA0;资料</a></li><li><a href="mediawiki/" class="item false"><span class="glyphicon glyphicon-blackboard" aria-hidden="true"></span>&#xA0;留言板</a></li><li><a href="mediawiki/" class="item false"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&#xA0;学长们</a></li>
        </ul>
    </div>
</div><style>#kx-header{z-index:1000;display:inline-block;text-align:center;position:fixed;left:0;right:0;margin:auto;font-size:15px}@font-face{font-family:'Glyphicons Halflings';src:url('/dist/fonts/glyphicons-halflings-regular.eot');src:url('/dist/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('/dist/fonts/glyphicons-halflings-regular.woff2') format('woff2'),url('/dist/fonts/glyphicons-halflings-regular.woff') format('woff'),url('/dist/fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('/dist/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}#kx-header .glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#kx-header .glyphicon-home:before{content:"\e021"}#kx-header .glyphicon-book:before{content:"\e043"}#kx-header .glyphicon-blackboard:before{content:"\e218"}#kx-header .glyphicon-user:before{content:"\e008"}#kx-header.header-home{top:0;height:30px;background-color:#23282d}body.admin-bar #kx-header.header-home{top:32px}#kx-header.header-home li>a{color:rgba(240,245,250,0.8)}#kx-header.header-home li:not(:first-child):hover{background:#1d4568}@media screen and (max-width:954px){#kx-header.header-home{margin-top:5px;position:fixed;min-width:100px;position:static;width:100%}#kx-header.header-home li:not(:first-child):hover{background:white}#kx-header.header-home li>a{color:#333}}#kx-header.header-wiki{height:30px;background-color:#23282d}#kx-header.header-wiki li>a{color:rgba(240,245,250,0.8)}@media screen and (max-width:954px){#kx-header.header-wiki{background-color:white;padding-bottom:3px;border-bottom:1px solid #ccc;margin-top:5px;position:fixed;min-width:100px;position:static;width:100%}#kx-header.header-wiki li:not(:first-child):hover{background:white}#kx-header.header-wiki li>a{color:#333}#kx-header.header-wiki li>a:hover{text-decoration:none}}#kx-header .wrap{display:inline-block;width:100%}#kx-header .wrap>ul{overflow:hidden;white-space:nowrap;height:30px;margin:0}@media screen and (max-width:954px){#kx-header .wrap>ul{overflow:auto}}#kx-header .wrap>ul>li{display:inline-block;border-left:none;margin:0;padding:3px 25px;cursor:pointer}@media screen and (max-width:954px){#kx-header .wrap>ul>li{padding:3px 15px}}#kx-header .wrap>ul>li>a{border-bottom:none !important;outline:0 !important;text-decoration:none !important}#kx-header .wrap>ul>li .brand{border-left:none;font-size:18px;line-height:18px}#kx-header .wrap>ul>li:nth-child(2){border-left:none}@media screen and (max-width:954px){#kx-header .wrap>ul{background-color:white}#kx-header .wrap>ul>li:not(: first-child):hover{background:white}#kx-header .wrap>ul>li:not(: first-child):hover{background:white}#kx-header .wrap>ul>li .others{position:absolute;width:14%;display:inline-block;margin-right:10px;right:0;top:0}#kx-header .wrap>ul>li .others span{top:4px}#kx-header .wrap>ul>li .brand:nth-child(1){width:30%;float:left;line-height:20px;display:none}#kx-header .wrap>ul>li .item.selected{color:#d9534f;border-bottom:4px solid #d9534f}}</style>
	<div id="content" class="site-content">
