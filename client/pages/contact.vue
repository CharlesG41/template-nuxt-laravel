<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
const { data } = await useAsyncData('contact', () => $fetch('/pages/contact'))
</script>