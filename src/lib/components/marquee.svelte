<script>
  import { onMount } from "svelte";

  import { Blockquote } from "flowbite-svelte";
  import { QuoteSolid } from "flowbite-svelte-icons";
  export let items = [];
  export let direction = "left";
  export let speed = "fast";
  export let pauseOnHover = true;
  export let className = "";

  let containerRef;
  let scrollerRef;
  let start = false;

  onMount(() => {
    addAnimation();
  });

  function addAnimation() {
    if (containerRef && scrollerRef) {
      const scrollerContent = Array.from(scrollerRef.childNodes);
      scrollerContent.forEach((item) => {
        scrollerRef.appendChild(item.cloneNode(true));
      });

      getDirection();
      getSpeed();
      start = true;
    }
  }

  const getDirection = () => {
    if (containerRef) {
      containerRef.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.style.setProperty("--animation-duration", duration);
    }
  };
</script>

<div
  bind:this={containerRef}
  class="scroller relative z-20 max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] {className}"
>
  <ul
    bind:this={scrollerRef}
    class="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap {start &&
      'animate-scroll'} {pauseOnHover && 'hover:[animation-play-state:paused]'}"
  >
    {#each items as item}
      <li
        class="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-amber-100/90 px-8 py-6 md:w-[450px]"
        style="background: linear-gradient(180deg, var(--zinc-800), var(--zinc-900))"
      >
        <blockquote>
          <div
            aria-hidden="true"
            class="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          />

          <Blockquote size="sm">
            <QuoteSolid
              class="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal"
            />
            <p
              class="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal"
            >
              {item.quote}
            </p>
          </Blockquote>
          

          <div class="relative z-20 mt-6 flex flex-row items-center">
            <span class="flex flex-col gap-1">
              <span class="text-sm leading-[1.6] text-gray-400 font-normal">
                {item.name}
              </span>
              <span class="text-sm leading-[1.6] text-gray-400 font-normal">
                {item.title}
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    {/each}
  </ul>
</div>
