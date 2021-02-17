import { writable } from "svelte/store";
// import { db } from "../Utils/firebase";
import type { Page } from "../Utils/interfaces";

const DEFAULT_PAGES: Record<string, Page> = {}

// const PAGE_COLLECTION = db.collection('pages');

const localPages: Record<string, Page> = JSON.parse(localStorage.getItem("pages")) ?? {};

const { subscribe, update } = writable(DEFAULT_PAGES);

const getAllPages = () => {
    update(() => ({ ...localPages }))
}

const deletePage = (timestamp: string) => {
    update(pages => {
        delete pages[timestamp];
        localStorage.setItem("pages", JSON.stringify(pages))
        return pages;
    });
}

const updatePage = (page: Page) => {
    update(pages => {
        const updated = { ...pages, [page.timestamp]: page }
        localStorage.setItem("pages", JSON.stringify(updated))
        return updated;
    })
}

const addNewPage = updatePage;

// const getAllPages = () => PAGE_COLLECTION.get().then(snapshot => {
//     snapshot.forEach(doc => {
//         const page = doc.data();
//         update(pages => ({ ...pages, [page.timestamp]: page }))
//     })
// });

// const deletePage = async (timestamp: string) => {
//     update(pages => {
//         delete pages[timestamp]
//         return pages;
//     });
//     await PAGE_COLLECTION.doc(timestamp).delete();
// }

// const updatePage = async (page: Page) => {
//     update(pages => ({ ...pages, [page.timestamp]: page }))
//     await PAGE_COLLECTION.doc(page.timestamp).update({ body: page.body })
// }

// const addNewPage = async (page: Page) => {
//     update(pages => ({ ...pages, [page.timestamp]: page }));
//     await PAGE_COLLECTION.doc(page.timestamp).set(page);
// }

export default { subscribe, updatePage, addNewPage, deletePage, getAllPages }