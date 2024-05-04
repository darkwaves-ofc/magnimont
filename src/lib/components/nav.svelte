<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import Button from "./button.svelte";
</script>

<Navbar class=" bg-transparent pt-5 items-">
  <NavBrand href="/">
    <svg
      width="39"
      height="35"
      viewBox="0 0 39 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0935 26.1964L9.82245 19.0188L9.7502 22.0531L19.1682 29.3366L28.9626 22.159L28.8879 19.1683L19.0935 26.1964Z"
        fill="#D7B44D"
      />
      <path
        d="M9.74768 22.159L9.7502 22.0531M9.7502 22.0531L9.82245 19.0188L19.0935 26.1964L28.8879 19.1683L28.9626 22.159L19.1682 29.3366L9.7502 22.0531Z"
        stroke="#D7B44D"
      />
      <path
        d="M8.02802 14.8449V26.8693L5.8598 28.4393L5.78503 10.4207L19.1682 20.4393L33.2991 10.4207V28.8132L30.9065 26.5702V14.9066L19.243 23.5795L8.02802 14.8449Z"
        fill="#D7B44D"
        stroke="#D7B44D"
      />
      <path
        d="M3.69159 30.9065L1.14953 32.8505L1 1L19.1682 14.6075L37.785 1.14953V33L35.243 31.0561V6.23364L19.1682 17.5981L3.69159 5.80502V30.9065Z"
        fill="#D7B44D"
        stroke="#D7B44D"
      />
      <path
        d="M19.0935 26.1964L9.82245 19.0188L9.7502 22.0531L19.1682 29.3366L28.9626 22.159L28.8879 19.1683L19.0935 26.1964Z"
        fill="#D7B44D"
      />
      <path
        d="M9.74768 22.159L9.7502 22.0531M9.7502 22.0531L9.82245 19.0188L19.0935 26.1964L28.8879 19.1683L28.9626 22.159L19.1682 29.3366L9.7502 22.0531Z"
        stroke="#D7B44D"
      />
      <path
        d="M8.02802 14.8449V26.8693L5.8598 28.4393L5.78503 10.4207L19.1682 20.4393L33.2991 10.4207V28.8132L30.9065 26.5702V14.9066L19.243 23.5795L8.02802 14.8449Z"
        fill="#D7B44D"
        stroke="#D7B44D"
      />
      <path
        d="M3.69159 30.9065L1.14953 32.8505L1 1L19.1682 14.6075L37.785 1.14953V33L35.243 31.0561V6.23364L19.1682 17.5981L3.69159 5.80502V30.9065Z"
        fill="#D7B44D"
        stroke="#D7B44D"
      />
    </svg>
    <span
      class="self-center whitespace-nowrap text-xl font-semibold font-calsans text-white"
      >‎ ‎ Magnimont</span
    >
  </NavBrand>
  <div class="flex md:order-2">
    <div class="max-md:hidden">
      <Button>Get started</Button>
    </div>
    <NavHamburger />
  </div>
  <NavUl class="order-1 font-inter">
    <NavLi
      class="md:mb-0 mb-4  transition ease-linear  md:hover:text-amber-200"
      href="/"
      active={true}>Home</NavLi
    >
    <NavLi
      class="md:mb-0 mb-4 transition ease-linear  md:hover:text-amber-200 "
      href="#services">Services</NavLi
    >
    <NavLi
      class="mb-4 md:mb-0 transition ease-linear  md:hover:text-amber-200"
      href="#testimonials"
    >
      Testimonials</NavLi
    >
    <NavLi
      class="mb-4 md:mb-0 transition ease-linear  md:hover:text-amber-200"
      href="#pricing">Pricing</NavLi
    >
    <NavLi
      class="mb-4 md:mb-0 transition ease-linear  md:hover:text-amber-200"
      href="#faq">faq</NavLi
    >
    <div class="md:hidden">
      <Button>Get started</Button>
    </div>
  </NavUl>
</Navbar>
