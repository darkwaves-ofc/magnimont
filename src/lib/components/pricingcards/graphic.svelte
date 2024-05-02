<script>
  import { Card, Button } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<div class="flex my-12 flex-row items-center justify-between">
  <Card
    padding="xl"
    class="globalcard w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 bg-transparent border-amber-100/90 px-8 py-6 md:w-[450px]"
  >
    <h5 class="mb-4 text-xl font-medium">Standard plan grarphicu</h5>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">49</span>
      <span class="ms-1 text-xl font-normal">/month</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
        >
          2 team members
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
        >
          20GB Cloud storage
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
        >
          Integration help
        </span>
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >Sketch Files</span
        >
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >API Access</span
        >
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >Complete documentation</span
        >
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >24×7 phone & email support</span
        >
      </li>
    </ul>
    <Button class="w-full">Choose plan</Button>
  </Card>

  <!-- Second card -->
  <Card
    padding="xl"
    class="globalcard w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 bg-transparent border-amber-100/90 px-8 py-6 md:w-[450px]"
  >
    <h5 class="mb-4 text-xl font-medium">Standard plan</h5>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">49</span>
      <span class="ms-1 text-xl font-normal">/month</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
        >
          2 team members
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200 " />
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
        >
          20GB Cloud storage
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
        >
          Integration help
        </span>
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >Sketch Files</span
        >
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >API Access</span
        >
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >Complete documentation</span
        >
      </li>
      <li
        class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500"
      >
        <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
        <span class="text-base font-normal leading-tight text-gray-500"
          >24×7 phone & email support</span
        >
      </li>
    </ul>
    <Button class="w-full">Choose plan</Button>
  </Card>

  <!-- Third card -->
</div>
