<template>
  <div>
  <h1>Listed animals are {{species}}</h1>
  <b-table striped hover :items="pets">
    <template  v-slot:cell(name)="pets">
      <router-link :to="`pets/${species}/${pets.index}`">
        {{pets.value}}
      </router-link>
    </template>
  </b-table>
</div>
</template>

<script>
export default {
  name: 'PetTable',
  props: {
    species: String,
    pets: Array
  }
}
</script>
