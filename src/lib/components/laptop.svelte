<script>
  import InfiniteMovingCards from "./marquee.svelte";

  import { DeviceMockup } from "flowbite-svelte";
  const testimonials = [
    {
      quote:
        "Magnimonts team truly understands the art of translating ideas into beautiful and functional digital realities. The custom website and branding they created for our company is not only visually stunning but has helped drive more qualified leads than ever before. Their creativity and technical expertise are second to none!",
      name: "Zortec",
      title: "Youtuber, 20k+ Subscribers",
    },
    {
      quote:
        "Someone whos worked with multiple digital agencies, I can confidently say that Magnimont stands out from the pack. Their intelligent chatbot assistant has streamlined our customer service operations immensely, providing a seamless experience for our users around the clock. The team's level of service and commitment to our success has been outstanding.",
      name: "Chels Childers",
      title: "Internet Enthusiast",
    },
    {
      quote: "Revamping our online community was no easy task, but Magnimonts Discord bot development made it a seamless transition. The features they built have facilitated better moderation, increased engagement, and created an incredibly intuitive experience for our members. Their expertise in crafting tailored bot solutions is unmatched.",
      name: "Kish Kuruppath",
      title: "Project Manager ",
    },
    {
      quote:
        "From branding and web design to bot development and marketing assets, Magnimonts full-service offerings have been invaluable for our growing business. Their team is highly collaborative, working closely with us to understand our goals and create an integrated digital ecosystem that accurately reflects our brand vision.",
      name: "x77",
      title: "Founder MemeOn",
    },
    {
      quote:
        "Working with Magnimont was an absolute pleasure from start to finish. Their ability to seamlessly blend creative and technical expertise resulted in a truly innovative suite of digital products that have taken our brand to new heights. I've been consistently impressed by their passion, talent, and commitment to excellence.",
      name: "Shminkie",
      title: "Founder Universium",
    },
  ];
</script>

<!--<div class='relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[40vh] lg:h-[70vh] max-[496px]:w-[25%] w-[35%] md:w-[50%] lg:w-[70%]'>
    <div class='rounded-lg overflow-hidden h-full bg-white dark:bg-gray-800'>

       </div>
    </div> -->

<div
  data-aos="fade-in"
  data-aos-duration="1000"
  data-aos-delay="500"
  class="h-full rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
>
  <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
</div>

<!-- <div class='relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-[496px]:w-[30%] w-[40%] md:w-[55%] lg:w-[75%]'>
    <div class='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800' />
  </div> -->
