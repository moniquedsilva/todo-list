<template>
  <main class="flex items-center justify-center w-full h-screen bg-clean">
    <List />
  </main>
</template>

<script>
import List from './components/List'

export default {
  name: 'App',
  components: {
    List,
  },
}
</script>
