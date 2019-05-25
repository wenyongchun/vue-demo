<template>
   <div>
       First <br>
       <router-link to='/first/child'>FirstChild</router-link>
       <router-view></router-view>
   </div>
</template>

<script>
   export default {
       mounted(){
           console.log('First '+'mounted()') 
       }
   }
</script>

<style>

</style>