<script lang="ts">
  import type { KeybindObj } from "../types";

  import KeybindingWrapper from "./KeybindingWrapper.svelte";

  export let keybinds: KeybindObj[];
</script>

<table class="divide-y divide-neutral-600 px-6 my-5 max-w-5xl">
  {#each keybinds as keybind}
    <KeybindingWrapper {keybind} />
  {/each}
</table>
