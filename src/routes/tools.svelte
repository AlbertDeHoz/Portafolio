<script>
    import tools from "$lib/tools.json";
    import { getContext } from "svelte";
    const translate = getContext("translate");
</script>

<section class="container tools">
    <h2>{translate("tools.title")}</h2>
    <ul>
        {#each tools as tool}
            <li style={`color:var(--${tool.color})`} title={tool.name}>
                <i class={tool.icon_name} />
            </li>
        {/each}
    </ul>
</section>

<style>
    .tools ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--size-2);
    }

    .tools ul > li {
        padding: var(--size-3);
        border: var(--border-size-1) solid;
        border-radius: var(--radius-2);
    }

    .tools ul > li i {
        font-size: var(--font-size-fluid-2);
    }
</style>
