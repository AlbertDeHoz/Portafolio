import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = 'light' | 'dark';

const osTheme: Theme = browser && window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark';
const userTheme = browser && localStorage.getItem('color_scheme');
const theme = writable(userTheme ?? osTheme);

export const toggleTheme = () => {
    theme.update((currentTheme) => {
        const newTheme =  currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('color-scheme', newTheme);
        localStorage.setItem('color_scheme', newTheme);
        return newTheme;
    })
}

export {theme};
