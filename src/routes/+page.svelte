
<script>
	import TextInput from "../components/TextInput.svelte";
    import SubmitButton from "../components/SubmitButton.svelte";
    import Reset from "../components/Reset.svelte";
    import Attempts from "../components/Attempts.svelte";
    import CurrentWord, { getPopUp } from "../components/CurrentWord.svelte";
    import { onMount } from "svelte";
    import { finished } from "../lib/stores.js";
    import Winstreak from "../components/Winstreak.svelte";

    let gradientColors =  ['#2af598', '#009efd'];

    onMount(() => {
        const body = document.querySelector('body');
        body.style.background = `linear-gradient(to bottom right, ${gradientColors.join(', ')})`;
    })

    $: {
        if ($finished) {
            getPopUp().open();
        }
    }

</script>

<Winstreak/>

<div class="container">
<h1>Wordle</h1>
<CurrentWord/>
<Attempts/>
<TextInput/>
<SubmitButton/>
<div>
    <Reset/>
</div>

</div>






<style>
    /* black background for the website */
    h1 {
        margin-top: 0;
        padding: 10px 0 20px 0;
        text-align: center;
        border-bottom: 5px solid rgb(9, 64, 128);
        width: 100%;
        font-size: 48px; 
        font-weight: 1000; 
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
        letter-spacing: 25px; 
        background: linear-gradient(135deg, rgb(71, 25, 238),rgb(244, 27, 237)); 
        -webkit-background-clip: text; 
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        font-family: "Arial", sans-serif;
    }
    :root {
        height: 100%;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* space between elements */
        gap: 10px;
    }

</style>
