<script lang="ts">
  import type { Item } from './store';
  import Note from './Note.svelte';
  export let item: Item;
  let isImageLoaded: boolean = false;
  const notes = item.notes.split(', ');

  function handleImageLoad() {
    isImageLoaded = true;
  }
</script>

<div class="card">
  <div class="image">
    <div class="placeholder" class:hide="{isImageLoaded}">loading image</div>
    <img
      class:hide="{!isImageLoaded}"
      src={`https://loremflickr.com/500/500/coffee%20bean?${Math.random()}`}
      alt={item.blend_name}
      on:load={handleImageLoad}
    />
    <div class="intensifier" class:hide="{!isImageLoaded}">{item.intensifier}</div>
  </div>
  <div class="texts">
    <div class="origin">{item.origin}</div>
    <h2>{item.blend_name}</h2>
    <div class="variety">{item.variety}</div>
    <div class="chips">
      {#each notes as note (note)}
        <Note note={note} />
      {/each}
    </div>
  </div>
</div>


<style>
  .card {
    --padding: 12px;
    background-color: #ffffff;
  }
  .texts {
    padding: var(--padding) 0 var(--padding) var(--padding);
  }
  .texts > .origin {
    font-size: 12px;
    color: #666666;
  }
  .texts > .variety {
    font-size: 12px;
  }
  .chips {
    display: flex;
    width: calc(500px - var(--padding));
    overflow-x: auto;
    margin-top: 12px;
  }
  .image {
    position: relative;
    width: 500px;
    height: 500px;
  }
  .image > .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background-color: #dddddd;
    transition: opacity 1s ease;
  }
  .image > img {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s ease;
  }
  .image > .intensifier {
    position: absolute;
    top: 0;
    right: 0;
    transition: opacity 1s ease;
    padding: 12px;
    color: #ffffff;
    background-color: #99999944;
  }
  .hide {
    opacity: 0;
  }

</style>
