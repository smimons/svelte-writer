import type { Page } from "./interfaces";

export function generateTimestamp(): string {
    return new Date().toISOString()
}

export const WELCOME_BODY = "Welcome to Svelte Writer, a simple writing app made with the Svelte UI framework." +
    "\n\n - To get started, select a page, or add a new one." +
    "\n - Delete a page by clicking the cross by its title." +
    "\n - Your changes are automatically saved, so you can focus on writing." +
    "\n (Pages are saved to your local browser cache).";

export const DEFAULT_PAGE: Page = { title: "", timestamp: "", body: WELCOME_BODY };