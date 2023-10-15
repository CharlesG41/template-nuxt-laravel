<template>
    <div class="">
        <div class="flex space-x-4">
            <nuxt-link v-for="link in commons.menuLinks" :to="localePath(link.to)">{{ link.text }}</nuxt-link>
        </div>
        <div>
            
            <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                {{ locale.name }}
            </nuxt-link>
        </div>
        current locale : {{ $i18n.locale }}
    </div>
</template>

<script>
export default {
    computed: {
        // availableLocales() {
        //     return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        // },
    }
}
</script>

<script setup>
const commons = inject('commons');
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})
</script>