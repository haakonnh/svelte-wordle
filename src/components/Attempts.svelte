<script>
    import { finished, guessesLeft, value, didWin, gameReset, wordDict } from '../lib/stores.js';
    import { word } from '../lib/stores.js';
    import Block from './Block.svelte';
    import { buttonPressed } from '../lib/stores.js';

    function createWordDict() {
        $wordDict = {};
        for (let i = 0; i < $word.length; i++) {
            $wordDict[$word[i].toUpperCase()] = $wordDict[$word[i].toUpperCase()] + 1 || 1;
            console.log($wordDict);
        }
    }


    let colors = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]
    // write the above matrix but with every cell being white


    export let matrix = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]

    function handleInput() {
        let wordValue = $word.toUpperCase();
        let guessCount = {};

        let assembly = '';
        let wordCharCount = $wordDict;

        for (let i = 0; i < 5; i++) {
            let guessChar = $value[i];
            let wordChar = wordValue[i];
            

            guessCount[guessChar] = guessCount[guessChar] + 1 || 1;
            

            matrix[6 - $guessesLeft][i] = guessChar;

            
            if (guessChar === wordChar) {
                assembly += 'X';
                wordCharCount[guessChar]--;
            }
            else {
                assembly += '_';
            }
        }

        for (let i = 0; i < 5; i++) {

            if (assembly[i] === 'X') {
                colors[6 - $guessesLeft][i] = 'green';
                
            } else {
                let guessChar = $value[i];
                if (wordValue.includes(guessChar) && wordCharCount[guessChar] > 0) {
                    colors[6 - $guessesLeft][i] = 'orange';
                    wordCharCount[guessChar]--;
                }
            }
        }

        createWordDict();

        console.log(assembly);
        console.log(guessCount);

        

        
        $guessesLeft--;
        if ($value === $word.toUpperCase()) {
            $finished = true;
            $didWin = true;
        } else if ($guessesLeft === 0) {
            $finished = true;
            $didWin = false;
        }
        $value = '';
        $buttonPressed = false;

    }

    let buttonPressedValue = false;

    buttonPressed.subscribe((value) => {
        buttonPressedValue = value;
    });

// Reactive statement to react to changes in the buttonPressed store
    $: {
        if ($gameReset) {
            // reset the matrix and colors
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 6; j++) {
                    matrix[j][i] = '';
                    colors[j][i] = '';
                }
            }
            $gameReset = false;
        }
        else if (buttonPressedValue) {
            handleInput();
        }
    }

</script>

<div class="wrapper">
{#each matrix as row, i}
    {#each row as col, j}
        <Block val={matrix[i][j]} color={colors[i][j]} />
    {/each}
    
{/each}
</div>
<style>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 7.5px;
    }
</style>