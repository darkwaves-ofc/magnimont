<script>
  import { Card, Button } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<div
  id="pricing"
  class="flex my-12 flex-col md:flex-row items-center justify-center gap-8 py-12 px-[10%] md:px-5"
>

  <Card
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos="fade-up"
    padding="xl"
    class="globalcard text-zinc-200 max-md:max-w-full relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
  >
    <h2 class="mb-8 uppercase font-bold text-3xl font-inter">Basic</h2>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">499</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Custom Website <br>
          <span class="text-sm text-gray-500">- Up to 10 Pages<br>- Responsive Design<br>- Contact Form Integration</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Basic Branding Package <br>
          <span class="text-sm text-gray-500">- Logo Design<br>- Color Palette<br>- Font Selection</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          1 Standard Discord Bot
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          3 Months Support & Maintenance
        </span>
      </li>
    </ul>
    <button
      class="inline-flex h-12 items-center justify-center rounded-xl border border-amber-200 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Buy Now
    </button>
  </Card>

  <Card
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos="flip-up"
    padding="xl"
    class="globalcard text-zinc-200 max-md:max-w-full  relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
  >
    <h2
      class="mb-12 mt-6 text-amber-200 font-bold uppercase text-4xl font-inter"
    >
      PRO
    </h2>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">999</span>
    </div>
    <!-- List -->
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Custom Website & Web Apps <br>
          <span class="text-sm text-gray-500">- Unlimited Pages<br>- Interactive Design<br>- E-Commerce Integration</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Professional Branding Package <br>
          <span class="text-sm text-gray-500">- Logo & Brand Identity<br>- Style Guide<br>- Marketing Assets</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          1 Advanced Discord Bot <br>
          <span class="text-sm text-gray-500">- Custom Features<br>- AI Integration</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Custom Scripts & Automation <br>
          <span class="text -sm text-gray-500">- Workflow Optimization<br>- Task Automation</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          SEO Optimization <br>
          <span class="text-sm text-gray-500">- On-Page SEO<br>- Google Analytics Integration</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          6 Months Support & Maintenance
        </span>
      </li>
    </ul>
    <button
      class="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#fde68a,45%,#fff,55%,#fde68a)] bg-[length:200%_100%] px-6 font-medium text-zinc-800 transition-colors"
    >
    Buy Now
    </button>
  </Card>
  <!-- <Card
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos="fade-up"
    padding="xl"
    class="globalcard text-zinc-200 max-md:max-w-full relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
  >
    <h2 class="mb-8 uppercase font-bold text-3xl font-inter">ENTERPRISE </h2>
    <div class="flex items-baseline">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">1999+</span>
    </div>
    <ul class="my-7 space-y-4">
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Enterprise Web Solutions <br>
          <span class="text-sm text-gray-500">- Custom Web Apps<br>- Advanced Integrations<br>- Scalable Architecture</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Multifunction Discord Bots <br>
          <span class="text-sm text-gray-500">- Moderation Tools<br>- Server Management<br>- Custom Integrations</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          AI Software Development <br>
          <span class="text-sm text-gray-500">- Intelligent Assistants<br>- Predictive Analytics<br>- Machine Learning</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Custom Software Builds <br>
          <span class="text-sm text-gray-500">- Tailored Solutions<br>- Third-Party Integrations<br>- Rapid Prototyping</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          End-to-End Branding Strategy <br>
          <span class="text-sm text-gray-500">- Brand Positioning<br>- Visual Identity<br>- Marketing Collateral</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Advanced SEO & Marketing <br>
          <span class="text-sm text-gray-500">- On-Page & Off-Page SEO<br>- PPC Campaigns<br>- Social Media Marketing</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x -reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Premium Hosting & Security <br>
          <span class="text-sm text-gray-500">- Enterprise-Grade Infrastructure<br>- DDOS Protection<br>- SSL/TLS Encryption</span>
        </span>
      </li>
      <li class="flex space-x-2 rtl:space-x-reverse">
        <CheckCircleSolid class="w-4 h-4 text-amber-200" />
        <span class="text-base font-normal leading-tight">
          Dedicated Project Management <br>
          <span class="text-sm text-gray-500">- Experienced PM<br>- Regular Status Updates<br>- Deliverable Tracking</span>
        </span>
      </li>
    </ul>
    <button
      class="inline-flex h-12 items-center justify-center rounded-xl border border-amber-200 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Contact Us
    </button>
  </Card> -->
</div>
