<script>
  import Button from "./button.svelte";
</script>

<div class="flex items-center justify-center md:pb-3">
  <div
    class="flex flex-col md:flex-row items-center justify-between lg:gap-7 md:gap-4 sm:gap-2 self-center"
  >
    <div
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos="fade-up"
      class="staggered font-calsans text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      Introducing
    </div>
    <h1
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos="fade-up"
      class="golden-text staggered font-calsans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
    >
      MAGNIMONT
    </h1>
  </div>
</div>
<p
  data-aos-delay="500"
  data-aos-duration="1000"
  data-aos="fade"
  class="font-inter mt-4 font-normal text-xs md:text-sm lg:text-base text-neutral-400 max-w-[60%] tracking-wider text-center mx-auto"
>
  We are a service that provides a vast variety of Websites and Discord Bots
  which are developed and nourished by our team along with a few other different
  projects. Unlike other bot shops, we develop Discord Bots and Websites
  according to the taste of our customers. You name them and we got it. Make
  your imaginations comes to life

  <br class="mb-5" />
  <b>So what are you waiting for?</b>
  <br class="mb-5" />
  <Button />
</p>
