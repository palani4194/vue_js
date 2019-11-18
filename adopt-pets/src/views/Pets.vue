<template>
  <div class="py-4">
    <h1>Pets</h1>
    <p>{{animal.name}}</p>
    <p>{{animal.gender}}</p>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      'animal': {}
    }
  },
  computed: {
    ...mapState(
      [
        'cats',
        'dogs'
      ]
    )
  },
  mounted () {
    var animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
