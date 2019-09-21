<template>
  <div id="app" class="container mx-auto w-1/3 md:w-full">
    <div class="py-3 flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold text-green-500">🍔 Healthy <span class="text-orange-500">Burgers</span>.</h1>
      <p class="italic text-gray-700">Your favorite healthy burgers straight to your place</p>
      <div class="mt-4 border-b w-2/3 border-gray-400"></div>
    </div>
    <router-view class="mt-3" />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style src="./assets/css/tailwind.css"></style>