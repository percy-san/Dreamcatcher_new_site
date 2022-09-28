<script>
  export let data;
</script>

<article>
	<p>{data.number}</p>
	<h1>{ data.title }</h1>
  	<p>Published: {data.date}</p>
  	<svelte:component this={data.content} />
</article>

<style type="text/css">
	
</style>