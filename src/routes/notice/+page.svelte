<script>
export let data
</script>

<svelte:head>
  <title>Notices</title>
</svelte:head>

<main>
	<h1 class="header">NOTICES</h1>
<ul>
  <hr class="top-hr">
  {#each data.notices as notices}
    <li>
      <h2 class="notice-item"> <a href={notices.path}>{notices.meta.title}</a></h2>
      <p>Published {notices.meta.date}</p>
    </li>
    <hr>
  {/each}
</ul>
	
</main>

<style type="text/css">
	main{
		height: 100vh;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    padding: 30px;
    overflow-y: auto;

	}
  .top-hr{
    border: 3px solid black;
    border-radius: 5px;
  }
  li{
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    
    padding:5px;
  }

  .header{
    font-weight: bold;
    letter-spacing: 5px;
  }
  .notice-item a{
    color: var(--dream-blue);
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  .notice-item a:hover{
    color: var(--dream-yellow);

  }
  @media screen and (max-width: 600px) {
    main, li{
      display: flex;
      flex-direction: column;
    }
    .header{
      text-align: center;
    }


    
    
  }

</style>
