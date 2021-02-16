<script lang="ts">
	import pages from "../Stores/pages";
	import type { Page } from "../Utils/interfaces";
	import TextEditor from "./TextEditor.svelte";
	import {
		generateTimestamp,
		randomLine,
		WELCOME_BODY,
	} from "../Utils/functions";
	import MenuItem from "./MenuItem.svelte";
	import { onMount } from "svelte";
	let title: string = "";
	let selected: Page = $pages["intro"];
	let firstLine;

	function addPage(): void {
		if (title.length > 0) {
			const timestamp = generateTimestamp();
			pages.addNewPage({ title, timestamp, body: "" });
			title = "";
			selected = $pages[timestamp];
		}
	}

	function deletePage(page: Page): void {
		selected = undefined;
		pages.deletePage(page.timestamp);
	}

	$: if (selected) {
		firstLine = randomLine();
	}

	onMount(pages.getAllPages);
</script>

<main>
	<div class="sidebar">
		<h2>svelte writer</h2>
		<form on:submit|preventDefault={addPage}>
			<input
				type="text"
				bind:value={title}
				placeholder="add new page..."
			/>
			<i class="fas fa-plus" on:click={addPage} />
		</form>
		{#each Object.values($pages) as page}
			<MenuItem
				on:select={() => (selected = page)}
				on:delete={() => deletePage(page)}
				{page}
				selected={page.timestamp === selected?.timestamp}
			/>
		{/each}
	</div>
	<div class="divider" />
	<TextEditor
		{firstLine}
		page={selected ?? { title: "", timestamp: "", body: WELCOME_BODY }}
	/>
	<div class="spacer" />
</main>

<style>
	form {
		margin: 1rem 0;
		display: grid;
		grid-template-columns: 1fr auto;
	}
	i {
		font-size: 1.2rem;
		margin-top: 0.6rem;
		margin-right: 1.5rem;
		opacity: 0.4;
	}
	i:hover {
		cursor: pointer;
		opacity: 1;
	}
	input {
		width: auto;
		border: 0;
		outline: 0;
		border-bottom: 1px solid #ccc;
		margin-right: 1rem;
	}

	::placeholder {
		color: #ccc;
		font-weight: 300;
	}
	main {
		display: grid;
		grid-template-columns: 1fr auto 4fr 1fr;
		padding: 1em;
		margin: 0 auto;
	}

	.divider {
		border-left: solid 1px #ccc;
	}

	h2 {
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
		margin: 0;
	}
</style>
