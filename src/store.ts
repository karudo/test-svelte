import { writable } from 'svelte/store';

export type Item = {
  id: number,
  uid: string,
  blend_name: string,
  origin: string,
  variety: string,
  notes: string,
  intensifier: string,
};
type T = Array<Item>;

function createItems() {
  const { subscribe, update } = writable<T>([]);

  return {
    subscribe,
    add: async () => {
      const res = await fetch('https://random-data-api.com/api/coffee/random_coffee');
      const text = await res.json();
      update(items => [...items, text])
    },
  };
}

export const items = createItems();
