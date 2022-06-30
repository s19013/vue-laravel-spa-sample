<template>
  <button @click="addCount">{{ count }} 回クリックしました！</button>
</template>
<script setup>

import { ref } from 'vue'

const count = ref(0)
const addCount = () => {

    count.value++

}

</script>
