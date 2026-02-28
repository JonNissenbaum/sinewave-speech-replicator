import { writable } from 'svelte/store';

export const minFreqStore = writable(0);
export const maxFreqStore = writable(3000);
export const audioLengthStore = writable(2);
