<script>
  import { Card, Button } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<div class="flex my-12 flex-row items-center justify-between gap-8 py-12">
  <Card
    padding="xl"
    class="globalcard text-zinc-200 max-md:max-w-full relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
  >
    <h2 class="mb-8 uppercase font-bold text-3xl font-inter">Standard plan</h2>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">49</span>
      <span class="ms-1 text-xl font-normal">/month</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span class="text-base font-normal leading-tight">
          2 team members
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span class="text-base font-normal leading-tight">
          20GB Cloud storage
        </span>
      </li>
    </ul>
    <button
      class="inline-flex h-12 items-center justify-center rounded-xl border border-amber-200 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Shimmer
    </button>
  </Card>

  <Card
    padding="xl"
    class="globalcard text-zinc-200 max-md:max-w-full  relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
  >
    <h2
      class="mb-12 mt-6 text-amber-200 font-bold uppercase text-4xl font-inter"
    >
      Premium plan
    </h2>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">420</span>
      <span class="ms-1 text-xl font-normal">/month</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span class="text-base font-normal leading-tight">
          2 team members gsgghd
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span class="text-base font-normal leading-tight">
          20GB Cloud storage
        </span>
      </li>
    </ul>
    <button
      class="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#fde68a,45%,#fff,55%,#fde68a)] bg-[length:200%_100%] px-6 font-medium text-zinc-800 transition-colors"
    >
      Shimmer
    </button>
  </Card>
  <Card
    padding="xl"
    class="globalcard text-zinc-200 max-md:max-w-full relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
  >
    <h2 class="mb-8 uppercase font-bold text-3xl font-inter">Custom PLan</h2>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">69</span>
      <span class="ms-1 text-xl font-normal">/month</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span class="text-base font-normal leading-tight">
          2 team members
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span class="text-base font-normal leading-tight">
          20GB Cloud storage
        </span>
      </li>
    </ul>
    <button
      class="inline-flex h-12 items-center justify-center rounded-xl border border-amber-200 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Shimmer
    </button>
  </Card>
</div>
