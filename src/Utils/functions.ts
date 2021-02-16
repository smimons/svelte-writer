export function generateTimestamp(): string {
    return new Date().toISOString()
}

const firstLines: string[] = [
    "Call me Ishmael...",
    "Ships at a distance have every man's wish on board...",
    "It was the best of times, it was the worst of times...",
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife...",
    "It was a bright cold day in April, and the clocks were striking thirteen...",
    "I am an invisible man...",
    "The sky above the port was the color of television, tuned to a dead channel...",
    "This all happened, more or less...",
    "It was love at first sight...",
]

export const randomLine = (): string => {
    const index = Math.floor(Math.random() * firstLines.length);
    return firstLines[index]
}

export const WELCOME_BODY = "Welcome to Svelte Writer. The simple writing app. " +
    "\n\n - To get started, select a page, or add a new one." +
    "\n\n - Delete a page by clicking the cross by its title." +
    "\n\n - Your changes are automatically saved, so you can focus on writing.";
