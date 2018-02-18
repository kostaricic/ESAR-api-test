<template>
	<div id="sign-up" class="container ">
		<form action="POST">
			<h3 class="text-center"><span><i class="fas fa-keyboard"></i></span>  SIGN UP</h3>
			<div id="form-names" class="form-row">
				<div class="form-group col-md-6">
					<label for="first_name">First Name</label>
					<input v-model.lazy="signUp.first_name" class="form-control" type="text" name="first_name" required>
				</div>
				<div class="col-md-6">
					<label for="last_name">_name Name</label>
					<input v-model.lazy="formsignUplast_name" class="form-control" type="text" name="last_name" required>
				</div>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input v-model.lazy="signUp.email" class="form-control" type="text" name="email" required>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input v-model.lazy="signUp.password" class="form-control" type="password" name="password" required>
			</div>
			<div class="form-check">
				<input v-model="signUp.email_promotions" type="checkbox" class="form-check-input"  name="email_promotions">
				<label class="form-check-label" for="email_promotions">Promotions and announcements</label>
			</div>
			<button vue-on:click.prevent="postPost" class="btn btn-outline-danger">Sign up</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			signUp: {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				email_promotions: false
			}
			// postBody: '',
			// errors: []
		}
	},
	methods: {
		// postPost() {
		// 	axios.post(`http://jsonplaceholder.typicode.com/posts`, {
		// 	body: this.postBody
		// 	})
		// 	.then(response => {})
		// 	.catch(e => {
		// 	this.errors.push(e)
		// 	})
		// }


	}
  // Pushes posts to the server when called.
}
</script>

<style lang="scss" scoped>
	$badge: #8ABE25;
	$hover: rgb(20, 131, 196);
	$red: #DA3849;

	h3 span {
		color: $red;
	}

	form h3 {
		margin-bottom: 40px;
		padding: 10px;
		// background-color: white;
		// display: inline;
	}

	#sign-up {
		background-image: url(../assets/images/form-background5.png);
		background-repeat: repeat;
		border: 1px solid $red;
		padding: 20px;
		border-radius: 5px;
		max-width: 50%;
		min-width: 350px;
		box-shadow: 10px 10px 39px -6px rgba(72, 33, 33, 0.474);
	}
	#form-email input {
		width: 70%;
	}
	button {
		background-color: white;
		margin-top: 12px;;
	}
</style>

