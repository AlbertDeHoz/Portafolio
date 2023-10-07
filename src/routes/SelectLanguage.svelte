<script>
    import { LanguagesIcon } from "lucide-svelte";
    let menuExpanded = false;
</script>

<div class="select-language">
    <button
        on:click={() => (menuExpanded = !menuExpanded)}
        aria-expanded={menuExpanded}><LanguagesIcon /></button
    >
    <menu data-sveltekit-reload aria-hidden={!menuExpanded}>
        <li><a href="/ES">Español (ES)</a></li>
        <li><a href="/">English (US)</a></li>
        <li><a href="/FR">Français (FR)</a></li>
    </menu>
</div>

<style>
    .select-language {
        position: relative;
        display: grid;
        align-items: center;
    }
    .select-language button {
        background-color: inherit;
        box-shadow: none;
        border: none;
        aspect-ratio: 1;
        padding: 0;
    }

    .select-language menu {
        position: absolute;
        align-self: start;
        right: -1rem;
        margin-block-start: 2rem;
        min-width: 8rem;
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: var(--size-3);
        border-radius: var(--radius-2);
        background-color: var(--surface-3);
        box-shadow: var(--shadow-4);
    }

    .select-language menu a {
        padding: 0;
        margin: 0;
    }
    .select-language [aria-hidden="true"] {
        display: none;
    }
</style>
