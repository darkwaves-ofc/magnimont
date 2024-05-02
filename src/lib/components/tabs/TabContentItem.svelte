<script lang="ts">
  export let activeTabValue;
  export let id;
  export let contentDivClass = "";
</script>

{#if activeTabValue === id}
  <div
    class={contentDivClass}
    id="{id}-tabitem"
    role="tabpanel"
    aria-labelledby="{id}-tab"
  >
    <slot />
  </div>
{/if}
