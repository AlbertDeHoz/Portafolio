<script>
    import {translate} from '$lib/config';
</script>

<h2>{translate("skills.title")}</h2>
<ul>
{#each [0,1,2] as index}
   <li>{translate(`skills.${index}`)}</li> 
{/each}
</ul>
<section>

</section>


