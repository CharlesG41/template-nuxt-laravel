<template>
    <div class="bg-black text-white font-robLight">
        <div class="w-10/12 mx-auto py-10 lg:pt-20 space-y-10 lg:space-y-0 lg:flex lg:justify-between">
            <div class="space-y-10 mx-auto lg:w-1/3 lg:mx-0">
                <div>
                    <nuxt-link :to="localePath('index')">
                        <MainWhite class="w-[250px] mx-auto lg:mx-0" />
                    </nuxt-link>
                </div>
                <div >
                    {{commons.footer.text}}
                </div>
                <!-- socials -->
            </div>
            <div class="space-y-5">
                <nuxt-link v-for="link in commons.footer.links" :to="localePath(link.to)"
                    class="inline-block w-1/2 text-xl">
                    {{ link.text }}
                </nuxt-link>
            </div>
        </div>
        <div class="w-10/12 border-t border-gray-500 mx-auto py-6">
            {{ commons.footer.copyright }}
        </div>
    </div>
</template>

<script setup>
import MainWhite from '~/public/logos/MainWhite.vue'

const commons = inject('commons');
</script>

