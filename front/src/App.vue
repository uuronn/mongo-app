<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item._id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const items = ref([]);

    onMounted(() => {
      fetch('http://localhost:3000/api/items', { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          items.value = response.data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });

    return {
      items,
    };
  },
};
</script>
