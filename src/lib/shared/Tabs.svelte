<script>
  import { onMount } from "svelte";

  export let disc = false
  export let items = [];
  export let activeTabValue;

  onMount(() => {
    // Set default tab value
    if (Array.isArray(items) && items.length && items[0].value) {
      activeTabValue = items[0].value;
    }
  });

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>




<div>
  {#if Array.isArray(items)}
  <div class="artist-names">
    {#each items as item}
      <p class={activeTabValue === item.value ? 'active' : ''}>
        <span on:click={handleClick(item.value)}>{item.label}</span>
      </p>
    
    {/each}
  </div>
  {/if}
</div>


<style>
  p{
    line-height: 10px;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    padding-left: 15px;
   

  }
  p:hover{
    color: var(--dream-yellow);
  }
   
    p.active > span {
    color:var(--dream-yellow);
    font-weight: bold;
    
  }


  @media only screen and (max-width: 480px){
    .artist-names{
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap:10px;
      
     
    }
  }




  
</style>