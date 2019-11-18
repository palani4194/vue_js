export default {
  getAnimalCount (state) {
    return state.cats.length + state.dogs.length
  },
  getCatsCount (state) {
    return state.cats.length
  },
  getDogsCount (state) {
    return state.dogs.length
  }
}
