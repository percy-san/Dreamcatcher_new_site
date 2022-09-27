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
    text-align: right;

  }
  p:hover{
    font-size: 20px;
  }
   
    p.active > span {
    color:var(--dream-yellow);
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }


  @media only screen and (max-width: 480px){
    .artist-names{
      display: flex;
      flex-direction: column;
      align-items: center;
     
    }
  }




  
</style>