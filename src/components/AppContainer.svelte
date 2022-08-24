<script lang="ts">
  import type { KeybindObj } from "../types";

  import KeybindingContainer from "./KeybindingContainer.svelte";
  import SearchForm from "./SearchForm.svelte";
  let keybindingFilter: string = "";
  let keybindingArray: KeybindObj[] = [
    {
      key: "o",
      meaning: "add newline to the cursor",
    },
    {
      key: "backspace",
      meaning: "move cursor to the left",
    },
    {
      key: "i",
      meaning: "add cursor after the selection",
    },
  ];
  $: filteredKeybindings =
    keybindingFilter.length === 0
      ? keybindingArray
      : keybindingArray.filter(
          (keybinding) =>
            keybinding.key.match(keybindingFilter) ||
            keybinding.meaning.match(keybindingFilter)
        );
</script>

<SearchForm bind:keybindingFilter />

<KeybindingContainer keybinds={filteredKeybindings} />
