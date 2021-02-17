<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Page } from "../Utils/interfaces";
    const dispatch = createEventDispatcher();

    export let page: Page;
    export let selected: boolean;
</script>

<div on:click={() => dispatch("select")} class:selected>
    <i class="fas fa-times" on:click={() => dispatch("delete")} />
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
