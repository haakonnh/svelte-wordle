<script>
    import { beforeUpdate, onMount } from "svelte";
    import {fade} from "svelte/transition";
    import BlockLetter from "./BlockLetter.svelte";
    import blockFade from "../lib/transitions/blockFade.js"


    export let val = "";
    export let color = "";

    let isVisible = true;


</script>
{#if color === "green"}
    <div class="green block" in:blockFade>
        <BlockLetter letter={val} />
    </div>
{:else if color === "orange" }
    <div class="orange block" in:blockFade>
        <BlockLetter letter={val} />
    </div>
{:else if val === ""}
    <div class="block">
        <p></p>
    </div>
{:else}
    <div class="block">
        <BlockLetter letter={val} />
    </div>
{/if}


<style>
    /* square with black border */
    .green {
        /* i want to be able to be able to pick color  */
        background-color: rgb(42, 179, 42);
        transition: background-color 1s ease-in;
    }

    .orange {
        transition: background-color 1s ease;
        background-color: orange;
    }

    .block {
        font-size: 40px;
        width: 75px;
        height: 75px;
        border: 2px solid black;
        border-radius: 10px;
    }

    







</style>