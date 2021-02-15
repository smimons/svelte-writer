<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Entry } from "./interfaces";
    const dispatch = createEventDispatcher();

    export let entry: Entry = { id: "1", title: "", body: "" };
    export let selected: boolean;

    function handleSelect(): void {
        dispatch("select", entry);
    }
</script>

<li on:click={handleSelect} class={selected ? "selected" : ""}>
    {entry.title}
</li>

<style>
    li {
        text-transform: uppercase;
        padding: 0.2em;
        color: #444444;
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
    }
    .selected {
        font-weight: 600;
    }
</style>
