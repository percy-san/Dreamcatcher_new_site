<script type="text/javascript">
	import Navigation from '$lib/components/Navigation.svelte'
	import LandingInfo from '$lib/components/landingInfo.svelte'

	let landing = true
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<div class="header">
		<Navigation landing={landing}/>
	</div>
	<div class="center">
			<LandingInfo/>
	</div>

</main>

<style type="text/css">
	main{
		position: relative;
	}
	.header{
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 3)), url("../images/group-white-min.jpg");
		background-position: center;
  		background-repeat: no-repeat;
  		background-size: cover;
	    left: 0px;
	    top: 0px;
	    width: 100%;
	    height: 100vh;
	    
	}
		.center{
		position: absolute;
		left: 55%;
    	top: 60%;
    	width: 90%;
    	transform: translate(-50%, -50%);	
	}

	@media screen and (max-width: 900px) {
		.center{
			position: absolute;
			left: 50%;
    		top: 70%;
    		width: 90%;
    		transform: translate(-50%, -50%);	
		}
		
}


</style>