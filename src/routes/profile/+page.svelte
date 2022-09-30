<script type="text/javascript">
	import Members from '$lib/memberStores.js'
	import Tabs from '$lib/shared/Tabs.svelte'
	import ArtistInfo from '$lib/shared/artistInfo.svelte'

	

	 //Object to hold the tab items that will be passed as props to
	 //the profile tabs component
	 let tabItems = [
	    { label: `${$Members[0].name}`, value: 1 },
	    { label: `${$Members[1].name}`, value: 2 },
	    { label: `${$Members[2].name}`, value: 3 },
	    { label: `${$Members[3].name}`, value: 4 },
	    { label: `${$Members[4].name}`, value: 5 },
	    { label: `${$Members[5].name}`, value: 6},
	    { label: `${$Members[6].name}`, value: 7 }

  	];
	let currentTab;



</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>


<main>

	<div class="profile-info">
		<Tabs bind:activeTabValue={currentTab} items={tabItems} />
			
		<div class="member-info">
			{#if 1 === currentTab}
			<ArtistInfo name = {$Members[0].name} birthday= {$Members[0].Bitrhday} position = {$Members[0].position} profile = {$Members[0].image}/>
				
			{/if}

			{#if 2 === currentTab}
			  <ArtistInfo name = {$Members[1].name} birthday= {$Members[0].Bitrhday} position = {$Members[0].position} profile = {$Members[1].image}/>
			{/if}

			{#if 3 === currentTab}
			  <ArtistInfo name = {$Members[2].name} birthday= {$Members[2].Bitrhday} position = {$Members[0].position} profile = {$Members[2].image}/>
			{/if}

			{#if 4 === currentTab}
			  <ArtistInfo name = {$Members[3].name} birthday= {$Members[3].Bitrhday} position = {$Members[3].position} profile = {$Members[3].image}/>
			{/if}

			{#if 5 === currentTab}
			  <ArtistInfo name = {$Members[4].name} birthday= {$Members[4].Bitrhday} position = {$Members[4].position} profile = {$Members[4].image} />
			{/if}

			{#if 6 === currentTab}
			 <ArtistInfo name = {$Members[5].name} birthday= {$Members[5].Bitrhday} position = {$Members[5].position} profile = {$Members[5].image}/>
			{/if}

			{#if 7 === currentTab}
			  <ArtistInfo name = {$Members[6].name} birthday= {$Members[6].Bitrhday} position = {$Members[6].position} profile = {$Members[6].image}/>
			{/if}

		</div>
	</div>

</main>



<style type="text/css">
	main{
	    padding:10px;
	    height: 100%;
	   
	    
	}
	.profile-info{
		display: grid;
		grid-template-columns: 0.2fr 1fr ;
		grid-gap: 20px;
  		font-weight: bold;
  		z-index: 2;
  		width: 100%;
  		height: 120vh;

  		}
  		.member-info{
  			
  		}

	@media only screen and (max-width: 600px) {
		.profile-info{
			display: grid;
			grid-template-columns: 1fr;
		}
	}
	
	
</style>