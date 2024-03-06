<script>
    import projects from "$lib/projects.json";

    import image_todo_js from "$lib/images/js.banner.png";
    import image_todo_react from "$lib/images/todo-react-typescript.png";
    import image_tic_tac_vue from "$lib/images/tic-tac-toe.jpg";
    import { getContext } from "svelte";

    const translate = getContext("translate");
    const images = {
        "todo-js": image_todo_js,
        "todo-react": image_todo_react,
        "tic-tac-vue": image_tic_tac_vue,
    };
</script>

<section class="container">
    <h2>{translate("projects.title")}</h2>
    <div class="card-container">
        {#each projects as project}
            <div class="card-item">
                <img
                    src={`${images[project.image]}`}
                    alt={project.name}
                />
                <div class="card-item__body">
                    <h3>{project.name}</h3>
                    <p>{translate(`projects.${project.description}`)}</p>
                    <div class="call-to-action">
                        <a class="button" href={project.url}
                            >{translate("general.goto_repo")}</a
                        >
                        <a class="button" href={project.repository}
                            >{translate("general.goto_page")}</a
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    h2 {
        padding-block-end: var(--size-5);
    }
    .card-container {
        display: grid;
        gap: var(--size-3);
    }
    .card-item {
        padding: var(--size-3);
        display: grid;
        gap: var(--size-1);
        box-shadow: var(--shadow-2);
        border-radius: var(--radius-2);
        border: var(--border-size-1) solid var(--surface-3);
    }

    .card-item img {
        width: 100%;
        aspect-ratio: var(--ratio-golden);
    }

    .call-to-action {
        display: flex;
        gap: var(--size-1);
    }

    @media (min-width: 480px) {
        .card-item {
            grid-template-columns: 1fr 4fr;
        }
    }
</style>
