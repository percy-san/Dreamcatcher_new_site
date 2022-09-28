<script>
export let data
</script>

<main>
	<h1>Notices</h1>
<ul>
  {#each data.notices as notices}
    <li>
      <h2>
        <a href={notices.path}>
          {notices.meta.title}
        </a>
      </h2>
      Published {notices.meta.date}
    </li>
  {/each}
</ul>
	
</main>

<style type="text/css">
	main{
		height: 100vh;
	}
</style>
