<script setup lang="ts"></script>

<template>
  <section
    id="pricing"
    class="container text-center py-24 sm:py-32">
    <div class="mt-16 text-center">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Pricing</h2>
      <p class="text-lg mt-4">Simple &amp; Predictable pricing. No Surprises.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mx-auto mt-12 w-full">
      <div
        class="flex flex-col w-full order-first lg:order-none border-2 py-5 px-6 rounded-md">
        <div class="text-center">
          <h3 class="text-lg font-medium">Regular</h3>
          <p class="mt-3 text-4xl font-bold md:text-4xl">&euro;5</p>
        </div>
        <ul class="grid mt-8 text-left gap-y-4">
          <li class="flex items-start gap-3">
            <Icon
              name="fa6-solid:check"
              class="size-6 text-green-600" />
            <span>Up to 60 days visibility</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="fa6-solid:check"
              class="size-6 text-green-600" />
            <span>Company logo</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="fa6-solid:x"
              class="size-6 text-red-600" />
            <span class="text-gray-500 dark:text-gray-400"
              >Promote job listing to the top</span
            >
          </li>
          <li class="mt-4 text-xs">* No registration required</li>
        </ul>
        <div class="flex mt-8">
          <NuxtLink
            to="/create"
            class="w-full">
            <ButtonSecondary> Get Started </ButtonSecondary>
          </NuxtLink>
        </div>
      </div>
      <div
        class="flex flex-col w-full order-first lg:order-none border-2 py-5 px-6 rounded-md">
        <div class="text-center">
          <h3 class="text-lg font-medium">Promoted</h3>
          <p class="mt-3 text-4xl font-bold md:text-4xl">&euro;20</p>
        </div>
        <ul class="grid mt-8 text-left gap-y-4">
          <li class="flex items-start gap-3">
            <Icon
              name="fa6-solid:check"
              class="size-6 text-green-600" />
            <span>Up to 60 days visibility</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="fa6-solid:check"
              class="size-6 text-green-600" />
            <span>Company logo</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon
              name="fa6-solid:check"
              class="size-6 text-green-600" />
            <span>Promote job listing to the top</span>
          </li>
          <li class="mt-4 text-xs">* No registration required</li>
        </ul>
        <div class="flex mt-8">
          <NuxtLink
            to="/create"
            class="w-full">
            <ButtonPrimary> Get Started </ButtonPrimary>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
