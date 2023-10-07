<script>
    import { getContext } from "svelte";
    import * as config from "$lib/config";
    import me_photo from "$lib/images/profil_web.png";
    import { Github, Languages } from "lucide-svelte";
    import ToggleTheme from "./ToggleTheme.svelte";
    import SelectLanguage from "./SelectLanguage.svelte";
    const translate = getContext("translate");
</script>

<nav>
    <div class="menu">
        <ToggleTheme />
        <SelectLanguage />
        <a
            class="actions"
            href="https://github.com/AlbertDeHoz/Portafolio"
            title="Source on GitHub"><Github /></a
        >
    </div>
</nav>
<header>
    <div class="profile">
        <img src={me_photo} alt="Alberto Alonso Profile" />
    </div>
    <div class="title">
        <h1>
            {translate("general.title")}, <span>{config.autor}</span>
        </h1>
        <h3>{translate("general.subtitle")}</h3>
    </div>
</header>

<style>
    h1 {
        font-weight: var(--font-weight-4);
    }
    h3 {
        font-weight: var(--font-weight-2);
    }
    .menu {
        display: flex;
        gap: var(--size-4);
        align-content: center;
    }
    .menu .actions {
        display: grid;
        place-content: center;
        padding: 0;
        border: none;
        border-radius: var(--radius-round);
        box-shadow: none;
        background-color: inherit;
        aspect-ratio: 1;
    }
    header span {
        color: var(--secondary);
        white-space: nowrap;
    }
    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-block-end: var(--size-9);
    }
    header {
        width: 100%;
        padding-block-end: var(--size-9);
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
    }
    
    @media (min-width: 380) {}

    @media (min-width: 740px) {
        header {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "title profile";
            gap: var(--size-8);
        }
        header .title {
            grid-area: title;
        }
        header .profile {
            grid-area: profile;
        }
        header span {
        }
    }
</style>
