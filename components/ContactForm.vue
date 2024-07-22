<script lang="ts" setup></script>

<template>
  <form
    id="form"
    action="https://formspree.io/f/xoqgygwv"
    method="POST">
    <div class="mb-5">
      <label
        htmlFor="full_name"
        class="sr-only">
        Full Name
      </label>
      <input
        id="full_name"
        type="text"
        placeholder="Full Name"
        required
        class="!px-4 !py-3 !border-2 placeholder-gray-600 dark:placeholder-black rounded-md outline-none !focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="name" />
    </div>
    <div class="mb-5">
      <label
        htmlFor="email_address"
        class="sr-only">
        Email Address
      </label>
      <input
        id="email_address"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="!px-4 !py-3 !border-2 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" />
    </div>
    <div class="mb-3">
      <label
        htmlFor="message"
        class="sr-only">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Your Message"
        class="px-4 py-3 border-2 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 h-36"></textarea>
    </div>
    <ButtonPrimary>Send Message</ButtonPrimary>
  </form>
</template>
