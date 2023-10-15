import { useI18n } from 'vue-i18n'

export function useApi() {
    const { locale } = useI18n();
    const apiUrl = useRuntimeConfig().public.apiUrl;

    async function fetch(url, headers = {}, localeParam) {
        const combinedHeaders = {
            'Accept-Language': localeParam ?? locale.value,
            ...headers,
        }

        return await $fetch(apiUrl + url, { headers: combinedHeaders })
    }

    return {
        fetch,
    }
}