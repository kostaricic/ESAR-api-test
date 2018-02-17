<template>
	<div>
		<app-nav></app-nav>
		<app-login></app-login>
		<app-body></app-body>
		<app-SignUp></app-SignUp>
	</div>	
</template>


<script>
import Nav from "./components/Nav.vue"
import Login from "./components/Login.vue"
import Body from "./components/Body.vue"
import SignUp from "./components/SignUp.vue"

export default {
	components: {
		"app-nav": Nav,
		"app-login": Login,
		"app-body": Body,
		"app-SignUp": SignUp,
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">

</style>
