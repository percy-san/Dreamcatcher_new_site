<script type="text/javascript">
	import NavModal from '$lib/shared/NavModal.svelte'
	

	let showModal = false
	export let landing = true
	


	const toggleModal = () =>{
		showModal = !showModal
		
		console.log(showModal)
	}

	
</script>



<NavModal {showModal} on:click={toggleModal} />
<nav>
	<a class="logo" href="/"><img src="../../images/logo.png"></a>
	<div>
		<i class="fa-solid fa-bars icon" on:click={toggleModal} class:landing-menu-icon={landing}></i>
	</div>	
</nav>

<style type="text/css">
	nav{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 10px 5px 10px;
	}

	.show-main-nav{
		display: none;
	}
	.logo{
		width: 4rem;
	}

	.icon{
		font-size: 25px;
		color: black;
		padding-right:10px;
		transition: 0.2s ease-in-out; 
	}
	.icon:hover{
		color: var(--dream-yellow);
	}

	.landing-menu-icon{
		color: white;
	}
	

	
</style>