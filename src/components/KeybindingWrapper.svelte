<script lang="ts">
  import type { KeybindObj } from "../types";

  export let keybind: KeybindObj;
</script>

<tr class=" ">
  <th class="px-4 py-2">
    <code class="bg-neutral-600 rounded-sm px-2">
      {keybind.key}
    </code>
  </th>
  <td>
    <div>
      {keybind.meaning}
    </div>
  </td>
</tr>
