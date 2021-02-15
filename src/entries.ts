import { writable } from "svelte/store";
import { db } from "./firebase";
import type { Entry } from "./interfaces";

const DEFAULT_ENTRIES: Record<string, Entry> = {}

const { subscribe, update } = writable(DEFAULT_ENTRIES);

const getAllEntries = async () => {
    await db.collection("entries").get().then(snapshots => {
        snapshots.forEach(doc => {
            updateEntry(doc.data() as Entry);
        });
    });
}
const updateEntry = (entry: Entry) => update(entries => ({ ...entries, [entry.id]: entry }));

const postEntry = async (entry: Entry) => {
    await db.collection("entries").doc(entry.id).set(entry).then(() => updateEntry(entry));
}

export default { subscribe, getAllEntries, updateEntry, postEntry }