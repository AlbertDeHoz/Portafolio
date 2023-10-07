<script>
    import { Sun, Moon } from "lucide-svelte";
    import { fly } from "svelte/transition";
    import { theme, toggleTheme } from "$lib/theme";
</script>

<button on:click={toggleTheme} class="toggle" aria-label="Toggle theme" title="Toggle theme">
    {#if $theme === "light"}
        <span in:fly={{ y: 10 }}><Sun /></span>
    {:else}
        <span in:fly={{ y: -10 }}><Moon /></span>
    {/if}
</button>

<style>
.toggle {
    display: grid;
    place-content: center;
    padding: 0;
    border: none;
    border-radius: var(--radius-round);
    box-shadow: none;
    background-color: inherit;
    aspect-ratio: 1;
}
</style>
