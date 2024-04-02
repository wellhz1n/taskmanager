<script setup  lang="ts">

defineProps<ICardProps>()

interface ICardProps{
    title:string,
    message:string
}
</script>
<template>
<div class="cardComponentContainer">
    <h3>{{title}}</h3>
    <h3>{{message}}</h3>

</div>
</template>
<style scoped>
.cardComponentContainer{
    border: 1px solid #444;
    background: #ffffff;
    padding: 16px;
    border-radius: 12px;
}

.cardComponentContainer:hover{
    filter: drop-shadow(0px  0px 16px rgba(30, 58, 26, 0.438));
}
</style>