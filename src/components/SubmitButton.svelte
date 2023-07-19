<script>
  import guessable from '../lib/guessable.js';
    import { buttonPressed, value, guessesLeft } from '../lib/stores.js';
    import { word } from '../lib/stores.js';
    import { finished } from '../lib/stores.js';

    export function handleSubmit() {
        if ($value.length < 5) {
            return;
        }
        if ($finished) {
            return;
        }

        if (!(guessable.includes($value.toLowerCase()))) {
            return;
        }
        
        $buttonPressed = true;
        
        
        
        console.log($value);
    }

    export function handleEnter(event) {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    }


</script>

<svelte:window on:keydown={handleEnter} />



<style>
    /*
    <button on:click={handleSubmit}> Submit </button>
    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 35px 75px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        border-radius: 15px;

    }

    button:hover {
        background-color: #145069;
        cursor: pointer;
    } */
</style>