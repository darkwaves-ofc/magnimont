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
        <FooterLink liClass="mb-2" href="forum.magnimont.com">Forum</FooterLink>
        <FooterLink liClass="mb-2" href="host.magnimont.com">Hosting</FooterLink>
        <FooterLink liClass="mb-2" href="/">Career</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-amber-200">
        Socials
      </h2>
      <FooterLinkGroup ulClass="text-gray-300 text-xs">
        <FooterLink liClass="mb-2" href="https://discord.gg/magnimont-876113814314164256">Discord Server</FooterLink>
        <FooterLink liClass="mb-2" href="https://www.linkedin.com/company/magnimont/">Linkedin</FooterLink>
        <FooterLink liClass="mb-2" href="https://github.com/Magnimont">Github</FooterLink>
        <FooterLink liClass="mb-2" href="https://www.youtube.com/@Magnimont/videos">Youtube</FooterLink>
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
        Connect
      </h2>
      <FooterLinkGroup ulClass="text-gray-300 text-xs">
        <FooterLink liClass="mb-4" href="/">+91 8076974315</FooterLink>
        <FooterLink liClass="mb-4" href="/">hi@magnimont.com</FooterLink>
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

      </FooterIcon>
      <FooterIcon href="https://discord.gg/magnimont-876113814314164256">
        <DiscordSolid
          class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </FooterIcon>
      <FooterIcon href="/">
      </FooterIcon>
      <FooterIcon href="https://github.com/Magnimont">
        <GithubSolid
          class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        />
      </FooterIcon>
    </div>
  </div>
</Footer>
