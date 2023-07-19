<script context="module" lang="ts">
	let onTop   //keeping track of which open modal is on top
	const modals={} 
	export function getPopUp(id=''){
		return modals[id]
	}
</script>


<script>
    import { onMount, onDestroy } from 'svelte';
    import { value } from '../lib/stores.js';
    import { word } from '../lib/stores.js';
    import { finished } from '../lib/stores.js';
    import { didWin } from '../lib/stores.js';
    import {buttonPressed} from '../lib/stores.js';
    import customFade from '../lib/transitions/customFade.js';

    let topDiv
    let visible=false
    let prevOnTop
    let closeCallback

    export let id=''

    function keyPress(ev){ 
        if(ev.key=="Escape" && onTop==topDiv) close() //ESC
    }
	//only respond if the current modal is the top one

    function open(callback){
        closeCallback=callback
        if(visible) return
        prevOnTop=onTop
        onTop=topDiv

        if (typeof window !== 'undefined') {
            window.addEventListener("keydown",keyPress)
        }
        
        
        //this prevents scrolling of the main window on larger screens
        document.body.style.overflow="hidden" 

        visible=true
        //Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
        document.body.appendChild(topDiv)
    }

    function close(retVal = null){
        if(!visible) return
        if (typeof window !== 'undefined') {
            window.removeEventListener("keydown",keyPress)
        }
        
        onTop=prevOnTop
        if(onTop==null) document.body.style.overflow=""
        visible=false
        if(closeCallback) closeCallback(retVal)
    
    }

    modals[id]={open,close}

    onDestroy(()=>{
	delete modals[id]
        if (typeof window !== 'undefined') {
            window.removeEventListener("keydown",keyPress)
        }
})
        

</script>

<div id="topModal"  class:visible bind:this={topDiv} on:click={() => close()} aria-hidden="true">
{#if ($finished && $didWin)} 
    <div class="modal" in:customFade>   
        <p>You won 🎉</p>
        <p> The word was <span>{$word}</span> </p>
    </div>

{:else if $finished && !$didWin}
    <div class="modal" in:customFade>
        <p> You Lost 💀 </p>
        <p> The word was <span>{$word}</span> </p>
    </div>
{/if}
</div>


<style>
    span {
        /* make color gradient for the text here */
        background: linear-gradient(to right, #d394ee, #de5b4d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.2em;
        font-weight: 1000;
        font-family: "Arial", sans-serif;
    }
    #topModal {
		visibility: hidden;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(167, 202, 238, 0.904);
		display: flex;
		align-items: center;
		justify-content: center;
        width: 100%;
        height: 100%;
	}

    .modal {
        position: relative;
        margin-bottom: 250px;
        border-radius: 10px;
        background: linear-gradient(135deg, rgb(62, 166, 215),rgb(15, 10, 146));
        filter: drop-shadow(5px 5px 5px #555);
        padding: 1em;
        border: 5px solid #5f5ffa;
    }
	

	.visible {
		visibility: visible !important;
	}

    p {
        text-align: center;
        font-size: 2em;
        color: rgb(135, 229, 251);
        font-family: "Arial", sans-serif;
        font-weight: 1000;

    }
        
</style>
