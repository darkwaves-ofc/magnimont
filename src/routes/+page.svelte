<script>
  import Spotlight from "$lib/components/spotlight.svelte";
  import Laptop from "../lib/components/laptop.svelte";
  import Faqtabs from "../lib/components/faqtabs.svelte";
  import Services from "../lib/components/services.svelte";
  import Intro from "$lib/components/sectionintro.svelte";
  import Footer from "../lib/components/footer.svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";
  onMount(() => {
    AOS.init();
  });
</script>

<Spotlight id="home" />

<!-- Testimonial section -->

<div
  class="box-shadow h-[30rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center"
>
  <div
    class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"
  />

  <div class="flex flex-col">
    <Intro
      id="testimonials"
      name="Trusted by many"
      desc="edit this in +page.svelte, told ya i did my best to code clean. aLSO EDIT THE METATAGS IN +PAFGE.SVELET"
    />
    <Laptop />
  </div>
</div>

<!-- Services -->
<div
  class="box-shadow min-h-[60rem] w-full bg-black bg-dot-white/[0.2] rounded-md shadow-2xl relative flex flex-col items-center justify-center"
>
  <div
    class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
  />

  <Intro
    id="services"
    name="What we offer"
    desc="edit this in +page.svelte bro its easy. I used props for this."
    class="highlight"
  />

  <Services />
</div>

<div
  class="box-shadow h-[45rem] -full bg-black bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center"
>
  <div
    class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"
  />
  <Intro
    name="Frequently Asked Questions"
    desc="loreem ipsum meet amnt yk weknd ballz kanye east auroli eret eusntha uoit."
  />
  <Faqtabs />
</div>

<Footer />

<!-- EDIT THE METATAGS FROM HERE -->

<MetaTags
  title="Magnimont"
  description="Magnimont description metatag"
  canonical="https://www.canonical.ie/"
  openGraph={{
    url: "https://www.url.ie/a",
    title: "Magnimont ",
    description: "Open Graph Description", //edit this too okay?
    images: [
      {
        url: "%sveltekit.assets%/favico.svg",
        width: 100,
        height: 100,
        alt: "Og Image Alt",
      },
    ],
    siteName: "Magnimont",
  }}
  twitter={{
    handle: "@handle", //put our twitter username here
    site: "@magnimont",
    cardType: "summary_large_image",
    title: "Magnimont",
    description: "This example uses more of the available config options.", //edit this too this is the description for like discord and twitter etc etc
    image: "%sveltekit.assets%/favico.svg",
    imageAlt: "image here",
  }}
/>
