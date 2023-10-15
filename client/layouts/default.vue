<template>
    <div>
        <CommonsHeader />
        <slot />
        <CommonsFooter />
    </div>
</template>

<script>
import { provide, ref } from 'vue';
import { useCommons } from '~/composables/useCommons';

export default {
    setup() {
        const commons = useCommons();
        provide('commons', commons);
        return {};
    },
};
</script>