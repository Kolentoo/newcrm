<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
    import Header from "./components/header/Header";
    export default {
        components: {Header}
    }
</script>
