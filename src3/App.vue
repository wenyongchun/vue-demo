<template>
	<div>
		App <br>
		<router-link to='/first'>First</router-link>
		<router-link to='/second'>Second</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App'
}
</script>

<style>

</style>
