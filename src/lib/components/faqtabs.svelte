<script>
  import Accordian from "$lib/components/accordian.svelte";
  import { Tabs, TabItem } from "flowbite-svelte";

  const General = {
    "Title 1": " general",
    "Title 2": "paragraph 3 4 4 ",
    "Title 3": "paragraph24 ",
    "Title 4 no memes in geenral": "paragraph",
    "Title 5": "paragraph",
  };

  const Biling = {
    "Title bling sjbkg": "paragrapsghsh h",
    "Title 2": "paragraph this is biling",
    "Title 3": "paragrar weg erg ph",
    "Title 4": "paragraph",
    "Title 5": "paragraph",
  };

  const Support = {
    "Title support 69": "paragraph this is support ",
    "Title 2": "paragraph bhwebkgjhb ",
    "Title 3": "paragraph",
    "Title 4": "paragraph",
    "Title 5": "paragraph",
  };

  const Product = {
    "Title 1 nice productu": "paragraph",
    "Title 2": "paragraph lol",
    "Title 3": "paragraph",
    "Title 4": "paragraph",
    "Title 5": "paragraph",
  };
</script>

<div id="faq">
  <Tabs
    id="faq"
    tabStyle="underline"
    contentClass="p-4 rounded-lg frosted-glass border border-amber-200 mt-4"
  >
    <TabItem
      open
      title="General"
      activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
      inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
      contentClass="p-4 rounded-lg bg-gray-800 mt-4"
    >
      <Accordian accordianinfo={General} />
    </TabItem>

    <!-- second item -->

    <TabItem
      title="Dashboard"
      contentClass="p-4  rounded-lg mt-4  bg-transparent"
      activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
      inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
    >
      <Accordian accordianinfo={Biling} />
    </TabItem>

    <!-- third item  -->

    <TabItem
      title="Settings"
      activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
      inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
    >
      <Accordian accordianinfo={Support} />
    </TabItem>

    <!-- fourth item -->

    <TabItem
      title="Users"
      activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
      inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
    >
      <Accordian accordianinfo={Product} />
    </TabItem>
  </Tabs>
</div>
