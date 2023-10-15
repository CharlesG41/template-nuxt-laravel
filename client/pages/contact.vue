<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
const { data } = await useAsyncData('contact', () => $fetch('http://localhost:8000/api/pages/contact'))
</script>