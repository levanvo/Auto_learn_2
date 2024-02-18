<script setup>
import { ref, computed } from 'vue'
import About from "./components/About.vue"
import NotFound from "./components/Notfound.vue"

const routes = {
  '/Notfound': NotFound,
  '/About': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(0) || '/'] || NotFound
})
</script>

<template>
  <a href="/">Home</a> |
  <a href="/About">About</a> |
  <a href="/Notfound">Broken Link</a>
  <component :is="currentView" />
</template>