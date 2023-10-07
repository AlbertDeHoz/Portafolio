<script>
    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'
    import '../../app.css';
    import {setContext} from 'svelte';
    import Header from '../header.svelte';
    export let data;
    const _translate = (path, module) => {
        const keys = path.split('.');
        let curr = module ?? data.translation;
        for (const key of keys) {
            if (curr && typeof curr === 'object' && key in curr) {
                curr = curr[key];
            }
            else {
                new Error(`${path}__not__found`);
            }
        }
        return curr;
    }
    setContext('translate', _translate);
</script>

<Header />
<slot />

