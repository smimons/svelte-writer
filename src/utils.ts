export function uuid(): string {
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