<script>
    import {winstreak, finished, didWin} from '../lib/stores.js';

     $: {
        if ($finished && $didWin) {
            $winstreak++;
        }

        if ($finished && !$didWin) {
            $winstreak = 0;
        }
     }
</script>

<div>
    <p> Win <br> Streak <br> {$winstreak} </p>
</div>

<style>
    div {
        width: 150px;
        height: 150px;
        border: 8px solid rgb(73, 57, 146);
        border-radius: 5px;
        background-color: linear-gradient(to bottom right, #2af598, #009efd);
        margin: 0 auto;
        position: absolute;
        top: 35%;
        right: 10%;
        padding: 10px;
        border-radius: 20px;
    }

    p {
        font-size: 40px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 8px;
        font-weight: 1000;
        text-shadow: 2px 2px 4px rgba(86, 83, 83, 0.5);
        letter-spacing: 2px;
        background: linear-gradient(135deg, rgb(40, 5, 169), rgb(244, 27, 237));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
    }
</style>