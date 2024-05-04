<script>
  import Accordian from "$lib/components/accordian.svelte";
  import { Tabs, TabItem } from "flowbite-svelte";

  const General = {
    "What services do you offer?": "We offer a wide range of digital services, including website development, UI/UX design, AI software development, branding, and more. Our team of experts can help you bring your digital vision to life with tailored solutions that meet your unique needs.",
    "How long does it typically take to develop a custom website?": "The timeline can vary depending on the scope and complexity of the project, but we generally aim to launch custom websites within 4-8 weeks. Simple websites may be completed sooner, while more advanced builds with complex functionality can take longer.",
    "What platforms do you develop bots and AI assistants for?": "We specialize in creating bots and AI solutions for platforms like Discord, Slack, Telegram, website chatbots, and custom software integrations. Our team has extensive experience building robust, user-friendly bots tailored to your unique use case.",
    "Do you provide ongoing support and maintenance?": "Absolutely. We offer comprehensive support and maintenance packages to ensure your websites, apps, bots and digital solutions continue operating smoothly long after launch. Our team provides timely updates, security patching, and technical assistance.",
    "How does the design process work?": "Our design approach is highly collaborative. We start by having in-depth discussions to understand your brand, goals, target audience and preferences. Using those insights, our designers craft initial concepts that we iterate on together until the designs accurately capture your vision.",
    "What is your typical pricing structure?": "Our pricing is tailored to each clients specific needs and project scope. We offer simplified monthly packages as well as customized pricing for enterprise-level solutions. Factors like features, third-party integrations and support needs influence the final cost. Get in touch for a personalized quote.",
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

    <!-- second item 

    <!--
      <TabItem
        title="Dashboard"
        contentClass="p-4  rounded-lg mt-4  bg-transparent"
        activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
        inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
      >
        <Accordian accordianinfo={Biling} />
      </TabItem>

      third item  
      <TabItem
        title="Settings"
        activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
        inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
      >
        <Accordian accordianinfo={Support} />
      </TabItem>

      fourth item 

      <TabItem
        title="Users"
        activeClasses="p-4  border-b-2 border-amber-200 text-amber-200/90 "
        inactiveClasses="p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 "
      >
        <Accordian accordianinfo={Product} />
      </TabItem>
    -->
  </Tabs>
</div>
