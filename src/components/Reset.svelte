<script>
    import {value, word, didWin, finished, gameReset, buttonPressed, guessesLeft, wordDict} from '../lib/stores.js';
    import {words} from '../lib/words.js';
    import {onMount} from 'svelte';

    function createWordDict() {
        $wordDict = {};
        for (let i = 0; i < $word.length; i++) {
            $wordDict[$word[i].toUpperCase()] = $wordDict[$word[i].toUpperCase()] + 1 || 1;
            console.log($wordDict);
        }
    }

    onMount(() => {
        $word = words[Math.floor(Math.random() * words.length)];
        createWordDict();
    });

    function handleReset() {
        $value = "";
        guessesLeft.set(6);
        $finished = false;
        $didWin = false;
        $word = words[Math.floor(Math.random() * words.length)];
        createWordDict();
        $gameReset = true;
        $buttonPressed = false;
    }

</script>

<button on:click={handleReset}>Reset</button>

<style>
    /* make it so that its different to  submit button */
    button {
        background-color: #f44336;
        border: none;
        color: white;
        padding: 20px 50px  ;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        border-radius: 15px;
    }

    button:hover {
        background-color: #843a84;
        cursor: pointer;
    }
</style>