<script type="text/javascript">


	export let name = ""
	export let birthday=""
	export let position = ""
	export let profile =""
	
</script>

<main>
	<div class="artist-image uk-animation-scale-up uk-transform-origin-top-left">
		<img src={`../images/${profile}` } alt="Artist image" class="img-1">
	</div>
</main>


<style type="text/css">
	
	.img-1{
		display: block;
		margin: auto;
		width: 50%;
		height: auto;
		-webkit-box-shadow: -27px -16px 7px -2px rgba(0,0,0,0.32); 
		box-shadow: -27px -16px 7px -2px rgba(0,0,0,0.32);
		z-index: 0;
        top: 0;
        left: 0;

	}

    @media only screen and (max-device-width: 480px) {
    	.img-1{
    		display: block;
    		margin: 0 auto;
    		width: 90%;
    		height: auto;
    		box-shadow: none;

    	}
    	
		

		
	}
	
</style>