<script>
    import Header from './header.svelte';
    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'
    import Footer from './footer.svelte';
</script>

<div class="layout">
    <Header />
    <main>
    <slot />
    </main>
    <Footer />
</div>
