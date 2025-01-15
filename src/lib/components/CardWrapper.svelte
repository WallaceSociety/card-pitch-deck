<script lang="ts">
  export let className = '';
</script>

<div class="min-h-screen w-full flex items-center justify-center bg-gray-100">
  <div class="w-full max-w-[375px] h-[667px] bg-white rounded-lg shadow-lg overflow-hidden {className}">
    <slot />
  </div>
</div>