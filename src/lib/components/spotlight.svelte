<script>
  import { CheckOutline } from "flowbite-svelte-icons";
  import About from "./about.svelte";
  import Herolist from "./herolist.svelte";
</script>

<div
  class=" h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
>
  <div
    class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/90 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
  />

  <div class="-top-40 left-0 md:left-60 md:-top-20">
    <svg
      class="animate-spotlight pointer-events-none absolute z-[1] h-[69%] w-[38%] lg:w-[84%] opacity-0 blur-effect"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
    >
      <g>
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="#c6bb9f"
          fill-opacity="0.38"
        />
      </g>
      <defs>
        <filter
          id="blur-filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur stdDeviation="120" />
        </filter>
      </defs>
    </svg>
  </div>
  <div class=" p-4 max-w-[80%] mx-auto relative z-10 w-full pt-24">
    <About />
    <div class="">
      <Herolist />
    </div>
  </div>
</div>
