<script>

  export let data;
</script>

<main>
	<article>
		<h1 class="header">NOTICES</h1>
		<h2>{ data.title }</h2>
		<p>Published: {data.date}</p>
		<a href="/notice"><button class="back-btn">Back</button></a>
		<hr>
		<svelte:component this={data.content} />
		
	</article>
	
</main>

	



<style type="text/css">
	main{
		height: 100%;
	}
	h1,h2{
		font-weight: bold;
	}
	.header{
		font-weight: bold;
		letter-spacing: 2px;
		font-size: 45px;
		text-align: center;

	}
	article{
		display: block;
		margin: 0 auto;
		width: 90%;
		padding-top: 20px;
		overflow-y: auto;

	}
	hr{
		border: 1px solid black;
		border-radius: 10px;
	}
	.back-btn{
		width: 5rem;
		height:2rem;
		background-color: var(--dream-blue);
		color: white;
		padding: 5px;
		border-radius: 10px;
		border:none;
		transition: 0.2s ease-in-out;
	}
	.back-btn:hover{
		background-color: var(--dream-yellow);
		color: white;

	}

	
</style>