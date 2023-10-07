<script>
    import { getContext } from "svelte";

    const translate = getContext('translate');
</script>

<section class="container">
    <h2>{translate('summary.title')}</h2>
    <p>{translate('summary.parragraph')}</p>
</section>

<style>
p {
    margin-inline: auto;
}
</style>


