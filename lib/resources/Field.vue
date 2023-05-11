<template>
  <div>
    <div>
      Addon
      {{ contentValue }}
      <input v-model="contentValue" />
    </div>
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
