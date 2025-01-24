<script lang="ts">
  export let className = '';
</script>

<div class="min-h-screen w-full flex items-center justify-center bg-gray-100">
  <div class="w-full lg:max-w-[30%] md:max-w-[40%] h-screen bg-white lg:rounded-lg md:rounded-lg shadow-lg overflow-hidden {className}">
    <slot />
  </div>
</div>