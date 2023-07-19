<script>
    import customFade from "../lib/transitions/customFade.js"

    export let letter = "";

</script>

<p in:customFade>{letter}</p>

<style>
    p {
        opacity: 1;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: white;
        text-align: center;
        margin-top: 15px;
    }
</style>