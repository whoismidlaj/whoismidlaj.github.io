import { formatDate } from '../utils/dateFormatter';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('formatDate', formatDate);
});
