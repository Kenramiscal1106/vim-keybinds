<script lang="ts">
  export let keybindingFilter: string;
</script>

<form on:submit|preventDefault={() => null} class="px-4">
  <input
    type="text"
    name=""
    id=""
    class="bg-opacity-0 bg-neutral-800 border-neutral-600 outline-none py-3 px-6 border-2 w-full placeholder:text-neutral-500"
    placeholder="Search for a keybinding"
    bind:value={keybindingFilter}
  />
</form>
