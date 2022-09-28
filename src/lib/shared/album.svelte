<script type="text/javascript">
	export let cover = ""
	export let albumName =""
	export let releaseDate = ""
	
	
</script>

<main>
	<div class="card"  uk-animation-fade>
		<div class="cover">
			<img src={cover} alt="albumCover" uk-toggle >
		</div>
		<div class="album-info">
			<p class>{albumName}</p>
			<p>{releaseDate}</p>
		</div>
	</div>
	
</main>

<style type="text/css">
	
	.cover img{
		width: 100%;
		height: 100%;
	}
	.album-info{
		display: flex;
		align-items:baseline; 
		justify-content: space-between;
		margin-top: -15px;
	}
	p:first-child{
		font-weight: bold;
		font-size: 17px;
	}

	p:nth-last-child(1){
		font-size: 15px;
		color: grey;
		
	}



	
</style>