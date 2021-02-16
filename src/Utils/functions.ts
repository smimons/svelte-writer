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
    "It was a pleasure to burn...",
    "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small, unregarded yellow sun...",
    "The past is a foreign country; they do things differently there...",
    "This is my favourite book in the world, though I have never read it...",
    "All children, except one, grow up...",
    "In a hole in the ground, there lived a hobbit...",
    "The moment one learns English, complications set in...",
    "We were somewhere around Barstow on the edge of the desert when the drugs began to take hold...",
    "There was no possibility of taking a walk that day...",
]

export const randomLine = (): string => {
    const index = Math.floor(Math.random() * firstLines.length);
    return firstLines[index]
}

export const WELCOME_BODY = "Welcome to Svelte Writer, a simple writing app made with the Svelte UI framework." +
    "\n\n - To get started, select a page, or add a new one." +
    "\n - Delete a page by clicking the cross by its title." +
    "\n - Your changes are automatically saved, so you can focus on writing.";
