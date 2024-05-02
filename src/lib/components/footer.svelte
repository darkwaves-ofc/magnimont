<script>
  // COMPLETELY EDIT THIS FILE OR YOU ARE GONE
  import {
    Footer,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
    FooterCopyright,
  } from "flowbite-svelte";
  import {
    FacebookSolid,
    GithubSolid,
    DiscordSolid,
    TwitterSolid,
  } from "flowbite-svelte-icons";
</script>

<Footer footerType="sitemap">
  <div
    class="grid grid-cols-2 gap-8 pt-12 px-6 md:grid-cols-4 place-content-center bg-black"
  >
    <div>
      <h2 class="mb-6 text-sm font-semibold text-amber-200 uppercase">
        Magnimont
      </h2>
      <FooterLinkGroup ulClass="text-gray-300 text-xs">
        <FooterLink liClass="mb-2" href="/">About</FooterLink>
        <FooterLink liClass="mb-2" href="/">Careers</FooterLink>
        <FooterLink liClass="mb-2" href="/">Brand Center</FooterLink>
        <FooterLink liClass="mb-2" href="/">Blog</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-amber-200">
        Download
      </h2>
      <FooterLinkGroup ulClass="text-gray-300 text-xs">
        <FooterLink liClass="mb-2" href="/">Discord Server</FooterLink>
        <FooterLink liClass="mb-2" href="/">Twitter</FooterLink>
        <FooterLink liClass="mb-2" href="/">Facebook</FooterLink>
        <FooterLink liClass="mb-2" href="/">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-amber-200">Legal</h2>
      <FooterLinkGroup ulClass="text-gray-300 text-xs">
        <FooterLink liClass="mb-2" href="/">Privacy Policy</FooterLink>
        <FooterLink liClass="mb-2" href="/">Licensing</FooterLink>
        <FooterLink liClass="mb-2" href="/">Terms & Conditions</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-amber-200">
        edit this in components/footer.svelte
      </h2>
      <FooterLinkGroup ulClass="text-gray-300 text-xs">
        <FooterLink liClass="mb-4" href="/">iOS</FooterLink>
        <FooterLink liClass="mb-4" href="/">Android</FooterLink>
        <FooterLink liClass="mb-4" href="/">Windows</FooterLink>
        <FooterLink liClass="mb-4" href="/">MacOS</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="pb-5 px-8 bg-black md:flex md:items-center md:justify-between">
    <FooterCopyright
      spanClass="text-xs text-amber-200 sm:text-center"
      href="/"
      by="Magnimont™"
    />
    <div
      class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0"
    >
      <FooterIcon href="/">
        <FacebookSolid
          class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid
          class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid
          class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid
          class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </FooterIcon>
      <FooterIcon href="/">hi</FooterIcon>
    </div>
  </div>
</Footer>
