<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import Screen from "../../components/playbook/EditScreen.vue"

  defineProps<{ id: string }>()
</script>

<template>
  <Screen :id="id" :key="id" />
</template>
