<template>
  <div id="appLayout">
    <div id="appStatic" class="grid grid-cols-6">
      <Navbar />
      <div id="appLayoutMain" class="col-span-5 grid grid-cols-4">
        <main class="col-span-3 bg-gray-900">
          <router-view/>  
        </main>  
        <Sidebar />
      </div>  
    </div>
    <div id="appSticky" class="fixed bottom-0 left-0 w-full">
      <Player />
    </div>
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