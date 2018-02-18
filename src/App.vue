<template>
	<div>
		<app-nav></app-nav>

		<div id="dugmad" class="container text-center">
			<button v-on:click="component = 'app-signUp'" class=" "><span class="badge badge-success">POST_</span> Registration</button>
			<button  v-on:click="component = 'app-login'" class=" "><span class="badge badge-success">POST_</span> Login</button>
			<hr>
		</div>

		<component v-bind:is="component"></component>

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
		"app-signUp": SignUp,
	},
	data() {
		return {
			component: 'app-body'
		};
	}
};
</script>

<style lang="scss">

	$badge: #8ABE25;
	$hover: rgb(20, 131, 196);
	$focus: rgb(121, 126, 122);
	$red: rgba(218, 56, 72, 0.474);

	#dugmad {
		padding: 20px;
		margin-bottom: 20px;;
	}

	#dugmad button {
		background-color: #fff;
		border: none;
		padding-bottom: 8px;
		border-bottom: 3px solid #fff;
	}

	#dugmad button:hover {
		border-bottom: 3px solid rgba(0, 0, 0, 0.481);
	}

	#dugmad button:focus {
		border-bottom: 3px solid $red;
		outline: none;
	}


</style>
