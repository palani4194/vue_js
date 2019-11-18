<template>
  <div class="py-4">
    <h1 class="py-4" >Dogs Table</h1>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`pets/dogs/${data.index}`">
          {{data.value}}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      // 'dogs': dogs
    }
  },

  computed: {
    ...mapState(
      ['dogs']
    )
  }
}

</script>
