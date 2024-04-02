<script setup lang="ts">
import Card from "../../components/card/Card.vue";
</script>
<template>
  <div class="cards-container-list">
    <Card
      v-for="i in 10"
      :title="'Teste' + i"
      message="Teste de mensagem card"
    />
  </div>
</template>
<style scoped>
.cards-container-list {
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
