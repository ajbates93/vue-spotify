<template>
  <div id="appLayout">
    <Navbar />
    <div id="appLayoutMain">
      <main>
        <router-view/>  
      </main>  
      <Sidebar />
    </div>  
    <Player />
  </div>  
</template>

<script>
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Player from "@/components/Player"

export default {
  components: {
    Navbar,
    Sidebar,
    Player
  }
}
</script>

<style lang="less">

</style>