<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import {
    ChevronDownOutline,
    ChevronUpOutline,
    PlusOutline,
  } from "flowbite-svelte-icons";
  export let accordianinfo;
</script>

<Accordion flush class="sm:w-[50vw] p-3 md:p-5 bg-transparent">
  {#each Object.entries(accordianinfo) as [title, paragraph]}
    <AccordionItem
      class=" text-zinc-200  bg-transparent"
      borderSharedClass="border-amber-100/20"
      paddingFlush="md:py-4 py-3"
      activeClasses=""
      inactiveClasses="border-amber-100/20"
    >
      <div slot="arrowup">
        <ChevronUpOutline class="h-6 w-6 -me-0.5" />
      </div>
      <span slot="arrowdown">
        <ChevronDownOutline class="h-6 w-6 -me-0.5" />
      </span>

      <span
        slot="header"
        class=" gap-5 text-sm md:text-xl flex flex-row items-center justify-start"
      >
        <PlusOutline size="sm" />
        {title}
        </span>
      <p class="border-0 text-zinc-200">
        {paragraph}
      </p>
    </AccordionItem>
  {/each}
</Accordion>
