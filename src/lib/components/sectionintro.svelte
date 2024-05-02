<script>
  export let desc;
  export let name;
</script>

<div class="flex flex-col justify-center items-center my-4 z-[100]">
  <h1
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos="flip-down"
    class=" highlight font-calsans text-5xl pb-3 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
  >
    {name}<br />
  </h1>
  <p
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos="fade-in"
    class="font-inter font-normal text-xs md:text-sm lg:text-base text-neutral-400 max-w-[60%] tracking-wider text-center mx-auto"
  >
    {desc}
  </p>
</div>
