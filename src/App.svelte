<script lang="ts">
	import { onMount } from "svelte";
	import entries from "./entries";
	import type { Entry } from "./interfaces";
	import MenuEntry from "./MenuEntry.svelte";
	import TextEditor from "./TextEditor.svelte";
	import { randomLine, uuid } from "./utils";

	let title: string = "";
	let selected: Entry = { id: "", title: "", body: "" };

	let firstLine = randomLine();

	onMount(() => entries.getAllEntries());

	const addEntry = async () => {
		const id = uuid();
		const entry = { id, title, body: "" };
		await entries.postEntry(entry);
		title = "";
		selected = $entries[id];
	};

	$: if (selected) {
		firstLine = randomLine();
	}
</script>

<main>
	<div class="sidebar">
		<h2>svelte writer</h2>
		<form on:submit|preventDefault={addEntry}>
			<input
				type="text"
				bind:value={title}
				placeholder="add new page..."
			/>
		</form>
		{#each Object.values($entries) as entry}
			<MenuEntry
				on:select={() => (selected = entry)}
				{entry}
				selected={entry.id === selected.id}
			/>
		{/each}
	</div>
	<div class="divider" />
	{#if selected.id.length > 1}
		<TextEditor {firstLine} entry={selected} />
	{:else}
		<span>Start by selecting or creating a new page.</span>
	{/if}
	<div class="spacer" />
</main>

<style>
	span {
		font-family: Georgia, "Times New Roman", Times, serif;
		color: #666;
		border: 0;
		background-color: #fbfbf8;
		font-size: 1.2em;
		padding: 1em;
		height: 90vh;
	}
	form {
		margin: 1rem 0;
		/* text-align: center; */
	}
	input {
		text-transform: uppercase;
		color: #444444;
		border: 0;
		outline: 0;
		font-weight: 600;
		border-bottom: 1px solid #ccc;
	}

	::placeholder {
		color: #ccc;
		font-weight: 300;
	}
	main {
		display: grid;
		grid-template-columns: 1fr auto 4fr 2fr;
		padding: 1em;
		margin: 0 auto;
		background-color: #fbfbf8;
	}

	.divider {
		border-left: solid 1px #ccc;
	}

	h2 {
		/* text-align: center; */
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
		margin: 0;
	}
	span {
		border: 0;
		background-color: #fbfbf8;
		padding: 1em;
		height: 90vh;
	}
</style>
