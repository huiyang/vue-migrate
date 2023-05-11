<template>
  <div>
      Core
      {{ contentValue }}
      <input v-model="contentValue" />
  </div>
</template>

<script>
  export default {
    data(){
      return{
        contentValue: '',
      }
    },
  }
</script>
