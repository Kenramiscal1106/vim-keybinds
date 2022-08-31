<script lang="ts">
  import type { KeybindObj } from "../types";

  import KeybindingContainer from "./KeybindingContainer.svelte";
  import SearchForm from "./SearchForm.svelte";
  let keybindingFilter: string = "";
  export let keybindingArray: KeybindObj[];
  $: filteredKeybindings =
    keybindingFilter.length === 0
      ? keybindingArray
      : keybindingArray.filter(
          (keybinding) =>
            keybinding.key.match(keybindingFilter) ||
            keybinding.meaning
              .toLowerCase()
              .match(keybindingFilter.toLowerCase())
        );
</script>

<SearchForm bind:keybindingFilter />

<KeybindingContainer keybinds={filteredKeybindings} />
