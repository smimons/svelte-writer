<script lang="ts">
    import pages from "../Stores/pages";
    import type { Page } from "../Utils/interfaces";
    export let page: Page;

    let triggerSave: boolean = false;
    let timer: number = 0;

    $: page.body && !!page.timestamp.length && eventTimer();

    const eventTimer = (): void => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            triggerSave = true;
        }, 1500);
    };

    $: if (!!triggerSave) {
        pages.updatePage(page);
        triggerSave = false;
    }
</script>

<textarea bind:value={page.body} placeholder={"Write something..."} />

<style>
    textarea {
        border: 0;
        font-size: 1.2em;
        padding: 1.5rem 2rem;
        outline: none;
        resize: none;
        height: 94vh;
    }

    ::placeholder {
        color: #eeeeee;
        opacity: 0.6;
    }
</style>
