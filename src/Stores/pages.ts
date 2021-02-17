import { writable } from "svelte/store";
import type { Page } from "../Utils/interfaces";

const DEFAULT_PAGES: Record<string, Page> = {}

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

export default { subscribe, updatePage, addNewPage, deletePage, getAllPages }