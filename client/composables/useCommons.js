import { ref, watch } from 'vue';
import { useApi } from '~/composables/useApi';
import { useI18n } from 'vue-i18n';

export function useCommons() {
  const { fetch } = useApi();
  const { locale } = useI18n();
  const data = ref({menuLinks: []});

  const fetchData = async () => {
    data.value = await fetch('commons');
  };

  // Fetch data initially
  fetchData();
  // Refresh data when locale changes
  watch(locale, fetchData);
  return data;
}