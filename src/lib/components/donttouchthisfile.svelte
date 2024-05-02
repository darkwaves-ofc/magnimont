<!-- <script>
  export function hover(node) {
    node.onmousemove = (e) => {
      for (const card of node.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }

  import {
    TabWrapper,
    TabHead,
    Tab,
    TabContentItems,
  } from "$lib/components/tabs/index.ts";
  let activeTabValue = 1;
  const handleClick = (tabValue) => () => {
    activeTabValue = tabValue;
  };

  import Branding from "./pricingcards/branding.svelte";
  import Webdev from "./pricingcards/webdev.svelte";
  import Webdesign from "./pricingcards/webdesign.svelte";
  import Uiux from "./pricingcards/uiux.svelte";
  import Product from "./pricingcards/product.svelte";
  import Graphic from "./pricingcards/graphic.svelte";
</script>

<div class="flex flex-col gap-5">
  <TabWrapper>
    <TabHead class=" max-md:w-[100vw] gap-5 ">
      <div id="cards" use:hover class=" max-md:w-[100vw] gap-5">
        <Tab id={1} on:click={handleClick(1)} {activeTabValue}>
          <div class="card shadow-2xl">
            <div class="card-content">
              <div class="card-image">
                <i class="fa-duotone fa-apartment" />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  <i class="fa-duotone fa-apartment" />
                  <div class="card-info-title">
                    <h3>Web DEvelopent</h3>
                    <h4>Places to be apart. Wait, what?</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab id={2} on:click={handleClick(2)} {activeTabValue}>
          <div class="card shadow-2xl">
            <div class="card-content">
              <div class="card-image">
                <i class="fa-duotone fa-unicorn" />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  <i class="fa-duotone fa-unicorn" />
                  <div class="card-info-title">
                    <h3>Web design</h3>
                    <h4>A single corn. Er, I mean horn.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab id={3} on:click={handleClick(3)} {activeTabValue}>
          <div class="card shadow-2xl">
            <div class="card-content">
              <div class="card-image">
                <i class="fa-duotone fa-blender-phone" />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  <i class="fa-duotone fa-blender-phone" />
                  <div class="card-info-title">
                    <h3>UI UX</h3>
                    <h4>These absolutely deserve to exist.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab id={4} on:click={handleClick(4)} {activeTabValue}>
          <div class="card shadow-2xl">
            <div class="card-content">
              <div class="card-image">
                <i class="fa-duotone fa-person-to-portal" />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  <i class="fa-duotone fa-person-to-portal" />
                  <div class="card-info-title">
                    <h3>Product</h3>
                    <h4>See you...</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab id={5} on:click={handleClick(5)} {activeTabValue}>
          <div class="card shadow-2xl">
            <div class="card-content">
              <div class="card-image">
                <i class="fa-duotone fa-person-from-portal" />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  <i class="fa-duotone fa-person-from-portal" />
                  <div class="card-info-title">
                    <h3>Graphics</h3>
                    <h4>...over here.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab id={6} on:click={handleClick(6)} {activeTabValue}>
          <div class="card shadow-2xl">
            <div class="card-content">
              <div class="card-image">
                <i class="fa-duotone fa-otter" />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  <i class="fa-duotone fa-otter" />
                  <div class="card-info-title">
                    <h3>Branding</h3>
                    <h4>Look at me, imma cute lil fella.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </div>
    </TabHead>

    <TabContentItems id={1} {activeTabValue}><Webdev /></TabContentItems>
    <TabContentItems id={2} {activeTabValue}><Webdesign /></TabContentItems>
    <TabContentItems id={3} {activeTabValue}><Uiux /></TabContentItems>
    <TabContentItems id={4} {activeTabValue}><Product /></TabContentItems>
    <TabContentItems id={5} {activeTabValue}><Graphic /></TabContentItems>
    <TabContentItems id={6} {activeTabValue}><Branding /></TabContentItems>

   bhgbksdjhfgb 
  </TabWrapper>
</div>

<style>
  #cards {
    display: flex;
    flex-wrap: wrap;
    max-width: 1206px;

    width: calc(100% - 20px);
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  #cards:hover > .card::after {
    opacity: 1;
  }

  .card {
    border: 1px solid #fef3c7;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    height: 260px;
    flex-direction: column;
    position: relative;
    width: 300px;
  }

  .card:hover::before {
    opacity: 1;
  }

  .card::before,
  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    filter: blur(50px);
    overflow: hidden;
    width: 100%;
  }

  .card::before {
    background: radial-gradient(
      500px circle at var(--mouse-x) var(--mouse-y),
      rgba(221, 221, 221, 0.151),
      transparent 40%
    );
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(214, 214, 214, 0.158),
      transparent 40%
    );
    z-index: 1;
  }

  .card > .card-content {
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }

  /* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */

  h3,
  h4 {
    color: rgb(240, 240, 240);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
  }

  i {
    color: rgb(240, 240, 240);
  }

  .card-image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
  }

  .card-image > i {
    font-size: 6em;
    opacity: 0.25;
  }

  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
  }

  .card-info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }

  .card-info > i {
    font-size: 1em;
    height: 20px;
    line-height: 20px;
  }

  .card-info-title > h3 {
    font-size: 1.1em;
    line-height: 20px;
  }

  .card-info-title > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
  }

  /* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */

  @media (max-width: 1000px) {
    #cards {
      max-width: 1000px;
      padding: 10px 0px;
    }

    .card {
      flex-shrink: 0;
      width: 300px;
    }
  }

  @media (max-width: 500px) {
    .card {
      height: 180px;
    }

    .card-image {
      height: 80px;
    }

    .card-image > i {
      font-size: 3em;
    }

    .card-info-wrapper {
      padding: 0px 10px;
    }

    .card-info > i {
      font-size: 0.8em;
    }

    .card-info-title > h3 {
      font-size: 0.9em;
    }

    .card-info-title > h4 {
      font-size: 0.8em;
      margin-top: 4px;
    }
  }

  @media (max-width: 320px) {
    .card {
      width: 100%;
    }
  }
</style> -->
