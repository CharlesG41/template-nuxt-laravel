import { defineStore } from 'pinia'
import { useApi } from '~/composables/useApi'
import { computed, ref } from 'vue';

export const useCommonsStore = defineStore('commons', () => {
    // const { fetch } = useApi();
    // const commonsData = ref(null);

    // const fetchCommons = async () => {
    //     commonsData.value = await fetch('commons');
    // }

    // const refreshCommons = async (localeCode) => {
    //     commonsData.value = await fetch('commons', {}, localeCode);
    // }

    // // Fetch data when store is created
    // if(!commonsData.value) {
    //     fetchCommons();
    // }
    

    // return {
    //     commonsData,
    //     refreshCommons
    // };
});