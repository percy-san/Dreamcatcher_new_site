<script type="text/javascript">
    import Socials from '$lib/shared/socials.svelte'
    import Footer from '$lib/shared/footer.svelte'
    import { slide } from 'svelte/transition';
    export let showModal = false


    
</script>

{#if showModal }
<div class="background" transition:slide="{{duration: 1000 }}">
    <div class="modal" >
        <div class="top">
            <a class="logo" href="/" on:click|self><img src="../../images/logo.png"></a>
            <i class="fa-solid fa-xmark" on:click|self></i> 
        </div>
        <div class="links">
            <ul>
                <li><a href="/profile" on:click|self>PROFILE</a></li>
                <li><a href="/discography" on:click|self>DISCOGRAPHY</a></li>
                <li><a href="/gallery" on:click|self>GALLERY</a></li>
                <li><a href="/" on:click|self>STORE</a></li>


            </ul>
        </div>
        <footer>
            <Footer />
            
        </footer>
        
          
        
    </div>
</div>
{/if}

<style type="text/css">
    .background{
        width: 100%;
        height: 100%;
        position: fixed;
        background:rgba(0,0,0,0.95);
        z-index: 3;
    }
  .modal{
        padding: 10px;
        max-width: 100%;
        height: 100%;
        position: relative;
    }

    .top{
        display: flex;
        align-items:center;
    }
    .top .logo{
        width: 6rem;

    }

    .top i{
        position: absolute;
        right: 0;
        padding: 10px;
        margin-right:20px;
        font-size: 30px;
        color: white;
    }
    .links{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .links ul{
        line-height: 5rem;
    }
    .links ul li{
        list-style: none;
        font-size: 35px;
    }
    .links ul li a{
        color: white;
        text-decoration: none;
        position: relative;
        transition: var(--trans);
    }
     .links ul li a::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color:  var(--dream-yellow);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;

     }
    .links ul li a:hover::before{
        color: var(--dream-yellow);
        transform-origin: left;
        transform: scaleX(1);
        
    }
    footer{
        position: absolute;
        bottom: 20px;
        width: 100%;
        left:0;

    }
    


@media only screen and (max-width: 480px) {
    .links ul li a{
        font-size: 15px;
    }

   
}
   
    
</style>