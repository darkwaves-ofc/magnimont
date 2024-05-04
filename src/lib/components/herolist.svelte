<!-- <script>
    import { List, Li, Span } from 'flowbite-svelte';
</script>

<List tag="ul" class="flex-col flex mb-8 space-y-4 text-gray-500 dark:text-gray-400" list="none">
    <Li icon class="gap-3">
        <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
        Individual configuration
    </Li>
    <Li icon class="gap-3">
        <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
        No setup, or hidden fees
    </Li>
    <Li icon class="gap-3">
        <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
        <span>Team size: <Span>1 developer</Span></span>
    </Li>
    <Li icon class="gap-3">
        <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
        <span>Premium support: <Span>6 months</Span></span>
    </Li>
    <Li icon class="gap-3">
        <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
        <span>Free updates: <Span>6 months</Span></span>
    </Li>
</List> -->

<script>
  import { CheckOutline } from "flowbite-svelte-icons";
  import { List, Li } from "flowbite-svelte";
</script>

<div id="testimonials">
  <List
    data-aos-delay="1200"
    data-aos-duration="500"
    data-aos="fade-in"
    tag="ul"
    list="none"
    class="flex font-inter text-gray-400 text-xs tracking-widest flex-wrap flex-shrink justify-around pt-20 items-center mb-6"
  >
    <Li class="flex">
      <CheckOutline class="w-5 h-5 text-amber-200" />
      <span
        href="/"
        class="me-4 hover:underline md:me-6"
        textColor="text-gray-700 dark:text-white">Custom Digital Solutions </span
      >
    </Li>

    <Li class="flex">
      <CheckOutline class="w-5 h-5 text-amber-200" />
      <span
        href="/"
        class="me-4 hover:underline md:me-6"
        textColor="text-gray-700 dark:text-white"
        >Innovative Tech & Creativity</span
      >
    </Li>
    <Li class="flex">
      <CheckOutline class="w-5 h-5 text-amber-200" />
      <span
        href="/"
        class="me-4 hover:underline md:me-6"
        textColor="text-gray-700 dark:text-white"
        >Full-Service Mastery</span
      >
    </Li>
    <!-- <Li class='flex'>

      <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
      <span href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">Affiliate Program</span>
    </Li>
    <Li class='flex'>

      <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
      <span href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">FAQs</span>
    </Li> -->
  </List>
</div>
