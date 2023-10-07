<script>
    import { Github, Gitlab, Linkedin } from "lucide-svelte";
    import { getContext } from "svelte";

    const translate = getContext("translate");
</script>

<footer>
    <ul class="social-media">
        <li><a href="/"><span><Github /></span></a></li>
        <li><a href="/"><Gitlab /></a></li>
        <li><a href="/"><Linkedin /></a></li>
        <li><a class="twitter" href="/">𝕏</a></li>
    </ul>
    <p>
        {translate("footer.footerprint")}
        {new Date().getUTCFullYear()}
    </p>
</footer>

<style>
.social-media {
    padding-block: var(--size-4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--size-5);
}

.social-media a {
    font-weight: var(--font-weight-6);
    font-size: 24px;
    padding: 0;
    margin: 0;
}

.social-media a.twitter {
    position: relative;
    top: 0.2rem;
}

p {
    margin-inline: auto;
    text-align: center;
}
</style>
