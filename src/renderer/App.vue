<template>
  <div id="app">
    <NavigationalTabs/>
    <router-view/>
  </div>
</template>

<script>
import NavigationalTabs from '@/components/NavigationalTabs'

export default {
  name: 'mem-launcher',
  components: {
    NavigationalTabs,
  },
}
</script>

<style>
  /* CSS */
</style>
