<script setup lang="ts"></script>
<template>
  <section
    id="contact"
    class="container py-24 sm:py-32 w-full">
    <div class="mt-16 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Contact</h1>
      <p class="text-lg mt-4 text-slate-600 dark:text-slate-300">
        We are a here to help.
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-5xl mt-16 w-full">
      <div>
        <h2 class="font-medium text-2xl">Contact JobGlimpse</h2>
        <p class="text-lg leading-relaxed text-slate-500 dark:text-slate-300 mt-3">
          Have something to say? We are here to help. Fill up the form or send email or
          call phone.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600 dark:text-slate-300">
            <Icon
              name="fa6-solid:location-dot"
              class="text-gray-400 size-4" />

            <span>1234 Sanfransico, CA 93063</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600 dark:text-slate-300">
            <Icon
              name="fa6-solid:envelope"
              class="text-gray-400 size-4" />

            <a href="jobglimpse@example.com"> jobglimpse@example.com </a>
          </div>
          <div
            class="flex items-center mt-2 space-x-2 text-gray-600 dark:text-slate-300 hover:text-slate-600">
            <Icon
              name="fa6-solid:phone"
              class="text-gray-400 size-4" />
            <a
              href="tel:+1 (987) 4587 899"
              class=""
              >+1 (123) 4587 899</a
            >
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>
