<template>
  <div class="py-4">
    <PetTable species="cats" :pets="cats"/>
  </div>
</template>

<script>
import PetTable from '@/components/PetTable'
import { mapState } from 'vuex'

export default {
  components: {
    PetTable
  },

  data () {
    return {
      // 'cats': cats
    }
  },
  computed: {
    ...mapState(
      ['cats']
    )
  }
}

</script>
