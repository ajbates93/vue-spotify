<template>
  <div class="p-4" id="home">
    <p class="mt-5 font-bold text-3xl text-white" id="greeting">Good {{timeOfDay}}</p>
    <div id="recent-playlists" class="my-4 grid grid-cols-4 gap-4">
      <div class="text-white">Playlist 1</div>
      <div class="text-white">Playlist 2</div>
      <div class="text-white">Playlist 3</div>
      <div class="text-white">Playlist 4</div>
      <div class="text-white">Playlist 5</div>
      <div class="text-white">Playlist 6</div>
      <div class="text-white">Playlist 7</div>
      <div class="text-white">Playlist 8</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    timeOfDay: function () {
      const now = new Date()
      const hour = now.getHours()
      let message = ''
      if (hour < 12)
        message = 'morning'
      else if (hour >= 12 && hour < 17)
        message = 'afternoon'
      else
        message = 'evening'
      return message
    }
  }
}
</script>
