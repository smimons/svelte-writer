<script lang="ts">
    import pages from "../Stores/pages";
    import type { Page } from "../Utils/interfaces";
    import { randomLine } from "../Utils/functions";
    export let page: Page;

    let triggerSave: boolean = false;
    let timer: number = 0;
    export let firstLine = randomLine();

    console.log(page);
    $: page.body && !!page.timestamp.length && eventTimer();

    const eventTimer = (): void => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            triggerSave = true;
        }, 2000);
    };

    $: if (!!triggerSave) {
        pages.updatePage(page);
        triggerSave = false;
    }
</script>

<textarea bind:value={page.body} placeholder={firstLine} />

<style>
    textarea {
        border: 0;
        font-size: 1.2em;
        padding: 1.5rem 2rem;
        outline: none;
        resize: none;
        height: 90vh;
    }

    ::placeholder {
        color: #eeeeee;
        opacity: 0.6;
    }
</style>
