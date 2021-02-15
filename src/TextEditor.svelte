<script lang="ts">
    import entries from "./entries";
    import type { Entry } from "./interfaces";
    import { randomLine } from "./utils";
    export let entry: Entry = { id: "1", title: "", body: "" };

    let saveText: boolean = false;
    let timer: number = 0;
    export let firstLine = randomLine();

    $: entry.body.length >= 0 && eventTimer();
    const eventTimer = (): void => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            saveText = true;
        }, 2000);
    };

    $: if (saveText) {
        entries.postEntry(entry);
        saveText = false;
    }
</script>

<textarea bind:value={entry.body} placeholder={firstLine} />

<style>
    textarea {
        font-family: Georgia, "Times New Roman", Times, serif;
        color: #666;
        border: 0;
        background-color: #fbfbf8;
        font-size: 1.2em;
        padding: 1em;
        outline: none;
        resize: none;
        height: 90vh;
    }

    ::placeholder {
        opacity: 0.5;
    }
</style>
