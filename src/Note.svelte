<script lang="ts">
  import { invert } from 'polished';
  export let note: string;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let bgColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
  let color = invert(bgColor);
</script>
<div class="note" style="background-color: {bgColor}; color: {color}">
  {note}
</div>

<style>
  .note {
    display: flex;
    justify-content: center;
    min-width: 100px;
    padding: 8px 16px;
    white-space: nowrap;
    border-radius: 8px;
  }
  .note:not(:first-child) {
    margin-left: 8px;
  }
</style>
