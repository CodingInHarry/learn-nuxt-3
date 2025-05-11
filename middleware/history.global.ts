export default defineNuxtRouteMiddleware((to, from) => {
  console.log("global middleware : ", to.path);
});
