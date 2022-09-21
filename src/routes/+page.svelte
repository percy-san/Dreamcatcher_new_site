<script type="text/javascript">
	import Navigation from '$lib/components/Navigation.svelte'

	let landing = true
</script>

<main>
	<div class="header">
		<Navigation landing={landing}/>
	</div>

</main>

<style type="text/css">
	.header{
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 3)), url("../images/group-white-min.jpg");
		background-position: center;
  		background-repeat: no-repeat;
  		background-size: cover;
	    left: 0px;
	    top: 0px;
	    width: 100%;
	    height: 120vh;
	    
	}


</style>