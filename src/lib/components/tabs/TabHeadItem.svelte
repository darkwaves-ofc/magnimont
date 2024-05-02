<script>
  export let id;
  export let activeTabValue;
  export let inactiveClass = "";
  export let activeClass = "";

  const liClass = "mr-2";
</script>

<li class={liClass} role="presentation">
  <button
    on:click
    class={activeTabValue === id ? activeClass : inactiveClass}
    id="{id}-tabhead"
    type="button"
    role="tab"
  >
    <slot />
  </button>
</li>
