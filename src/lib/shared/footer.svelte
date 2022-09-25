<script type="text/javascript">
	import Socials from '$lib/shared/socials.svelte'

	

</script>

<footer >
	<Socials/>
 	<p>Dreamcatcher Co.</p> 

	
</footer>

<style type="text/css">
	footer{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 10px 0 10px;
		background-color: black;
		color: white;
	}
	p{
		color: var(--dream-yellow);
	}

	@media only screen and (max-width: 480px) {
		footer{
			display: flex;
			flex-direction: column;
			align-items: center;

		}
   	
  }
	
</style>