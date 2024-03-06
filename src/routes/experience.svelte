<script>
    import { getContext } from "svelte";

 //   import { translate } from "$lib/config";
 const translate = getContext('translate');
</script>

<section class="container">
    <h2>{translate("experience.title")}</h2>
    <section class="experiences">
        <section class="experience_item">
            <h3>{translate("experience.frontend.title")}</h3>
            <ul>
                {#each translate("experience.frontend.resources") as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </section>
        <section class="experience_item">
            <h3>{translate("experience.backend.title")}</h3>
            <ul>
                {#each translate("experience.backend.resources") as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </section>
        <section class="experience_item">
            <h3>{translate("experience.mobile.title")}</h3>
            <ul>
                {#each translate("experience.mobile.resources") as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </section>
        <section class="experience_item">
            <h3>{translate("experience.automation.title")}</h3>
            <ul>
                {#each translate("experience.automation.resources") as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </section>
    </section>
</section>

<style>
    .experiences {
        display: grid;
        gap: var(--size-5);
    }
    section ul {
        display: grid;
        gap: var(--size-2);
    }

    section ul > li {
        background: var(--surface-3);
        border-radius: var(--size-2);
        padding: var(--size-3);
    }
    /* md */
    @media screen and (min-width:768px) {
        .experiences {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
