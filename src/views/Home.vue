<template>
  <div class="home">
    Good {{timeOfDay}}
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
