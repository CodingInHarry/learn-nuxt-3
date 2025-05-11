export default defineNuxtRouteMiddleware((to, from) => {
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
  if (!isAdmin.value) {
    return navigateTo("/");
  }
});
