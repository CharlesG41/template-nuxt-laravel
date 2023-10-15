<template>
    <div class="bg-red-500">
        You did it!
    </div>
</template>

<script setup>
import { useApi } from '~/composables/useApi'
import { ArrowUp, Star } from '~/assets/icons'
import { PrimaryButton } from '~/components/Buttons'

const { fetch } = useApi()
const { data } = await useAsyncData('index', () => fetch('pages/index'))
</script>~/components/Buttons/buttonIndex~/assets/icons/iconIndex