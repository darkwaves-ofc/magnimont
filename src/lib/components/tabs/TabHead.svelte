<script>
  export let divClass = "";
  export let ulClass = "";
</script>

<div class={divClass}>
  <ul class={ulClass} role="tablist">
    <slot />
  </ul>
</div>
