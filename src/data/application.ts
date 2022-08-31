import type { KeybindObj } from "../types";

export default [
  {
    key: ":h[elp] keyword",
    meaning: "open help for keyword",
    type: "Global",
  },
  {
    key: ":sav[eas] file",
    meaning: "save file as",
    type: "Global",
  },
  {
    key: ":clo[se]",
    meaning: "close current pane",
    type: "Global",
  },
  {
    key: ":ter[minal]",
    meaning: "open a terminal window",
    type: "Global",
  },
  {
    key: "K",
    meaning: "open man page for word under cursor",
    type: "Global",
  },
  {
    key: "h",
    meaning: "move cursor left",
    type: "Cursor movement",
  },
  {
    key: "j",
    meaning: "move cursor down",
    type: "Cursor movement",
  },
  {
    key: "k",
    meaning: "move cursor up",
    type: "Cursor movement",
  },
  { key: "l", meaning: "move cursor right", type: "Cursor movement" },
  {
    key: "gj",
    meaning: "move cursor down (multi-line text)",
    type: "Cursor movement",
  },
  {
    key: "gk",
    meaning: "move cursor up (multi-line text)",
    type: "Cursor movement",
  },
  { key: "H", meaning: "move to top of screen", type: "Cursor movement" },
  { key: "M", meaning: "move to middle of screen", type: "Cursor movement" },
  { key: "L", meaning: "move to bottom of screen", type: "Cursor movement" },
  {
    key: "w",
    meaning: "jump forwards to the start of a word",
    type: "Cursor movement",
  },
  {
    key: "W",
    meaning:
      "jump forwards to the start of a word (words can contain punctuation)",
    type: "Cursor movement",
  },
  {
    key: "e",
    meaning: "jump forwards to the end of a word",
    type: "Cursor movement",
  },
  {
    key: "E",
    meaning:
      "jump forwards to the end of a word (words can contain punctuation)",
    type: "Cursor movement",
  },
  {
    key: "b",
    meaning: "jump backwards to the start of a word",
    type: "Cursor movement",
  },
  {
    key: "B",
    meaning:
      "jump backwards to the start of a word (words can contain punctuation)",
    type: "Cursor movement",
  },
  {
    key: "ge",
    meaning: "jump backwards to the end of a word",
    type: "Cursor movement",
  },
  {
    key: "gE",
    meaning:
      "jump backwards to the end of a word (words can contain punctuation)",
    type: "Cursor movement",
  },
  {
    key: "%",
    meaning:
      "move to matching character (default supported pairs: '()', '{}', '[]' - use :h matchpairs in vim for more info)",
    type: "Cursor movement",
  },
  {
    key: "0",
    meaning: "jump to the start of the line",
    type: "Cursor movement",
  },
  {
    key: "^",
    meaning: "jump to first non-blank character of the line",
    type: "Cursor movement",
  },
  { key: "$", meaning: "jump to the end of the line", type: "Cursor movement" },
  {
    key: "g_",
    meaning: "jump to the last non-blank character of the line",
    type: "Cursor movement",
  },
  {
    key: "gg",
    meaning: "go to the first line of the document",
    type: "Cursor movement",
  },
  {
    key: "G",
    meaning: "go to the last line of the document",
    type: "Cursor movement",
  },
  { key: "5gg / 5G", meaning: "go to line 5", type: "Cursor movement" },
  { key: "gd", meaning: "move to local declaration", type: "Cursor movement" },
  { key: "gD", meaning: "move to global declaration", type: "Cursor movement" },
  {
    key: "fx",
    meaning: "jump to next occurence of character x",
    type: "Cursor movement",
  },
  {
    key: "tx",
    meaning: "jump to before next occurrence of character x",
    type: "Cursor movement",
  },
  {
    key: "Fx",
    meaning: "jump to the previous occurrence of character x",
    type: "Cursor movement",
  },
  {
    key: "Tx",
    meaning: "jump to the after previous occurrence of character x",
    type: "Cursor movement",
  },
  {
    key: ";",
    meaning: "repeat previous f, t, F or T movement, backwards",
    type: "Cursor movement",
  },
  {
    key: ",",
    meaning: "repeat previous f, t, F or T movement, backwards",
    type: "Cursor movement",
  },
  {
    key: "}",
    meaning:
      "jump to the next paragraph (or function/block, when editing code)",
    type: "Cursor movement",
  },
  {
    key: "{",
    meaning:
      "jump to the previous paragraph (or function/block, when editing code)",
    type: "Cursor movement",
  },
  { key: "zz", meaning: "center cursor on screen", type: "Cursor movement" },
  {
    key: "Ctrl + e",
    meaning: "move screen down one line (without moving cursor)",
    type: "Cursor movement",
  },
  {
    key: "Ctrl + y",
    meaning: "move screen up one line (without moving cursor)",
    type: "Cursor movement",
  },
  {
    key: "Ctrl + b",
    meaning: "move back one full screen",
    type: "Cursor movement",
  },
  {
    key: "Ctrl + d",
    meaning: "move forward one full screen",
    type: "Cursor movement",
  },
  {
    key: "Ctrl + d",
    meaning: "move forward 1/2 full screen",
    type: "Cursor movement",
  },
  {
    key: "Ctrl + u",
    meaning: "move back 1/2 full screen",
    type: "Cursor movement",
  },
  {
    key: "i",
    meaning: "insert before the cursor",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "I",
    meaning: "insert at the beggining of the line",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "a",
    meaning: "insert after the cursor",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "A",
    meaning: "insert at the end of the line",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "o",
    meaning: "append (open) a new line below the current line",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "O",
    meaning: "append (open) a new line abovethe current line",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "ea",
    meaning: "insert (append) at the end of the word",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "bi",
    meaning: "insert (append) at the start of the word",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + h",
    meaning: "delete the character before the cursor during insert mode",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + w",
    meaning: "delete word before the cursor during insert mode",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + j",
    meaning: "begin new line during insert mode",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + d",
    meaning: "de-indent (move left) line one shiftwidth during insert mode",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + n",
    meaning:
      "insert (auto-complete) next match before the cursor during insert mode",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + n",
    meaning:
      "insert (auto-complete) previous match before the cursor during insert mode",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + rx",
    meaning: "insert the contents of register x",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Ctrl + ox",
    meaning: "temporarily enter normal mode to issue on normal-mode command x",
    type: "Insert mode - inserting/appending text",
  },
  {
    key: "Esc",
    meaning: "exit insert mode",
    type: "Insert mode - inserting/appending text",
  },
  { key: "r", meaning: "replace a single character", type: "Editing" },
  {
    key: "R",
    meaning: "replace more than one character, until ESC is pressed.",
    type: "Editing",
  },
  {
    key: "J",
    meaning: "join line below to the current one with one space in between",
    type: "Editing",
  },
  {
    key: "gJ",
    meaning: "join line below to the current one without space in between",
    type: "Editing",
  },
  { key: "gwip", meaning: "reflow paragraph", type: "Editing" },
  { key: "g~", meaning: "switch case up to motion", type: "Editing" },
  { key: "gu", meaning: "change to lowercase up to motion", type: "Editing" },
  { key: "gU", meaning: "change to uppercase up to motion", type: "Editing" },
  { key: "cc", meaning: "change (replace) entire line", type: "Editing" },
  { key: "ciw", meaning: "change (replace) entire word", type: "Editing" },
  {
    key: "cw or ce",
    meaning: "change (replace) to the end of the word",
    type: "Editing",
  },
  {
    key: "s",
    meaning: "delete character and substitute text",
    type: "Editing",
  },
  {
    key: "S",
    meaning: "delete line and substitute text (same as cc)",
    type: "Editing",
  },
  {
    key: "xp",
    meaning: "transpose two letters (delete and paste)",
    type: "Editing",
  },
  { key: "u", meaning: "undo", type: "Editing" },
  { key: "U", meaning: "restore (undo) last changed line", type: "Editing" },
  { key: ".", meaning: "repeat last command", type: "Editing" },
  {
    key: "v",
    meaning: "start visual mode, mark lines, then do a command (like y-yank)",
    type: "Marking text (visual mode)",
  },
  {
    key: "V",
    meaning: "start linewise visual mode",
    type: "Marking text (visual mode)",
  },
  {
    key: "o",
    meaning: "move to other end of marked area",
    type: "Marking text (visual mode)",
  },
  {
    key: "Ctrl + v",
    meaning: "start visual block mode",
    type: "Marking text (visual mode)",
  },
  {
    key: "O",
    meaning: "move to other corner of block",
    type: "Marking text (visual mode)",
  },
  { key: "aw", meaning: "mark a word", type: "Marking text (visual mode)" },
  { key: "ab", meaning: "a block with ()", type: "Marking text (visual mode)" },
  { key: "aB", meaning: "a block with {}", type: "Marking text (visual mode)" },
  {
    key: "at",
    meaning: "a block with <> tags",
    type: "Marking text (visual mode)",
  },
  {
    key: "ib",
    meaning: "inner block with ()",
    type: "Marking text (visual mode)",
  },
  {
    key: "iB",
    meaning: "inner block with {}",
    type: "Marking text (visual mode)",
  },
  {
    key: "it",
    meaning: "inner block with <> tags",
    type: "Marking text (visual mode)",
  },
  {
    key: "Esc",
    meaning: "exit visual mode",
    type: "Marking text (visual mode)",
  },
  { key: ">", meaning: "shift text right", type: "Visual commands" },
  { key: "<", meaning: "shift text left", type: "Visual commands" },
  { key: "y", meaning: "yank (copy) marked text", type: "Visual commands" },
  { key: "d", meaning: "delete marked text", type: "Visual commands" },
  { key: "~", meaning: "switch case", type: "Visual commands" },
  {
    key: "u",
    meaning: "change marked text to lowercase",
    type: "Visual commands",
  },
  {
    key: "U",
    meaning: "change marked text to uppercase",
    type: "Visual commands",
  },
  { key: ":reg[isters]", meaning: "show registers content", type: "Registers" },
  { key: '"xy', meaning: "yank into register x", type: "Registers" },
  { key: '"xp', meaning: "paste contents of register x", type: "Registers" },
  {
    key: '"+y',
    meaning: "yank into the system clipboard register",
    type: "Registers",
  },
  {
    key: '"+p',
    meaning: "paste from the system clipboard register",
    type: "Registers",
  },
] as KeybindObj[];
