<template>
    <div>
        <div class="bg-lightGreen font-robBlack">
            {{ data }}
        </div>
    </div>
</template>

<script setup>
import { useApi } from '~/composables/useApi'

const { fetch } = useApi()
const { data } = await useAsyncData('index', () => fetch('pages/index'))
</script>