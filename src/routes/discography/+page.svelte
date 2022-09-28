<script type="text/javascript">
	import Albums from '$lib/shared/album.svelte'


const AlbumList = [
	{id:1, name:'Apocalypse: Save us', date:'April 12, 2022', cover:"Apocalypse_Save_Us.jpg"},
	{id:2, name:'Summer Holiday', date:'July 30, 2021 ',cover:"Summer_Holiday.jpg" },
	{id:3, name:'Eclipse', date:' March 24, 2021.', cover:"Eclipse.png" },
	{id:4, name:'Dystopia : Road to Utopia', date:'January 26, 2021',cover:"Dystopia_Road_to_Utopia.jpg" },
	{id:5, name:'Dystopia: Lose Myself', date:'Aug 17, 2020',cover:"Dystopia_Lose_Myself.jpg" },
	{id:6, name:'Endless Night', date:' March 11, 2020', cover:"Endless_Night.jpg" },
	{id:7, name:'Dystopia: The Tree of Language',date:'February 18, 2020',cover:"Tree_Of_Language.jpg"},
	{id:8, name:'Raid of Dream', date:'September 18, 2019',cover:"Raid_of_Dream.png" },
	{id:9, name:'The Beginning of the End', date:'September 11, 2019', cover:"Beginning_of_the_End.jpg"},
	{id:10, name:'Piri ~ Fue wo Fuke ~', date:'March 13, 2019', cover:"PIRI_Japanese.jpg" },
	{id:11, name:'The End of Nightmare', date:'February 13, 2019',cover:"The_End_Of_Nightmare.jpg" },
	{id:12, name:'What (Japanese Ver.)', date:'November 21, 2018', cover:"What_Japanese.png" },
	{id:13, name:'Nightmare - Escape the ERA', date:'May 10, 2018', cover:"Escape_The_Era.png" },
	{id:14, name:'Alone in the city', date:'September 20, 2018 ', cover:"Alone_In_The_City.jpg" },
  	{id:15, name:'Prequel', date:'July 27, 2017', cover:"Prequel.jpg" },
  	{id:16, name:'Fall Asleep in the Mirror',date:'April 5, 2017',cover:"Fall_Asleep_In_The_Mirror.png"},
  	{id:17, name:'Nightmare', date:'January 13, 2017', cover:"Nightmare.png"}	
];


	

	
</script>

<h1 class="page-header">Discography</h1>
	<div class="albums-section" >
		{#each AlbumList as albums}
			<Albums cover={`../images/albums/${albums.cover}`} albumName={albums.name} releaseDate ={albums.date } />

				
		{/each}
	</div>

	


<style type="text/css">
	.page-header{
		text-align: center;
	}
	
	.albums-section{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 10px;
		padding:30px;
	}
	@media screen and (max-width: 480px) {
		.albums-section{
		display: flex;
		flex-direction: column;
		
	}
		
}
	

	
</style>