<script>
	import { beforeUpdate } from 'svelte';
    import { afterUpdate } from 'svelte';
    import { value } from '../lib/stores.js';
    // console log the value state every second
    // uppercase before loading
    beforeUpdate(() => {
        if ($value.length > 5) {
            $value = $value.substring(0, 5);
        }
        $value = $value.toUpperCase();
    });
    
</script>

<input bind:value={$value} type="text">

<style>
    input {
        width: 22.65%;
        padding: 12px 20px;
        margin: 8px 0;
        height: 100px;
        font-size: 30px;
        text-align: center;
        box-sizing: border-box;
        border-radius: 15px;
        border: 2px solid #ccc;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
    }
    input:focus {
        border: 2px solid #555;
    }
</style>