<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Page } from "../Utils/interfaces";
    const dispatch = createEventDispatcher();

    export let page: Page;
    export let selected: boolean;

    function handleSelect(): void {
        dispatch("select");
    }

    function handleDelete(): void {
        dispatch("delete");
    }
</script>

<div on:click={handleSelect} class={selected ? "selected" : ""}>
    <i class="fas fa-times" on:click={handleDelete} />
    {page?.title}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 1rem;
        padding: 0.25rem 0.5rem;
        margin-right: 1.5rem;
    }
    div:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.15);
    }
    .selected {
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.1);
    }
    i {
        padding-top: 0.25rem;
        opacity: 0.4;
    }
    i:hover {
        opacity: 1;
    }
</style>
