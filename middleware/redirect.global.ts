export default defineNuxtRouteMiddleware((to) => {
  // Redirect /@midlaj to homepage
  if (to.path.replace(/\/$/, '') === '/@midlaj') {
    return navigateTo('/');
  }
});
