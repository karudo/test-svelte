<script lang="ts">
  import { items } from './store';
  import Item from './Item.svelte';
  let isLoading: boolean = false;
  let timeoutId;

  async function loadCoffee() {
    if (isLoading) return;
    clearTimeout(timeoutId);
    isLoading = true;
    items.add().finally(() => {
      isLoading = false;
      setTimeout(loadCoffee, 30000);
    });
  }
  loadCoffee();
</script>

<div class="main">
  {#each $items as item (item.id)}
    <div class="item">
      <Item item={item} class="card" />
    </div>
  {/each}
  <button class="button" on:click={loadCoffee} disabled={isLoading}>+</button>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main > .item {
    margin-bottom: 24px;
  }

  .button {
    font-size: 24px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
</style>
