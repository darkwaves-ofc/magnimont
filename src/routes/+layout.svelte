<script>
  import "../app.pcss";
  import "./global.css";
  import "cal-sans";
  import "inter-ui/inter.css";
  import Navbar from "$lib/components/nav.svelte";
</script>

<!-- <div class="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
    <div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <p class="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      Backgrounds
    </p>
  </div> -->

<div class="absolute w-screen z-50 top-0 left-0">
  <Navbar />
</div>
<slot />
