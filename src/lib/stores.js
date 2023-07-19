import { writable } from "svelte/store";    

export const value = writable("");

export const word = writable("");

export const guessesLeft = writable(6);

export const guesses = writable([]);

export const finished = writable(false);

export const didWin = writable(false);

export const buttonPressed = writable(false);

export const gameReset = writable(false);

export const wordDict = writable({});

export const winstreak = writable(0);
