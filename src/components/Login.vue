<template>
	<div id="sign-up" class="container ">
		<form action="POST">
			<h3 class="text-center"><span><i class="fas fa-keyboard"></i></span> LOGIN</h3>
			<!-- <i class="fas fa-keyboard"></i> -->
			
			<div class="form-group">
				<label for="email">Email</label>
				<input v-model.lazy="login.email"  class="form-control" type="text" name="email" required>
			</div>
			<div class="form-group">
				<label for="email">Password</label>
				<input v-model.lazy="login.password" class="form-control" type="password" name="email" required>
			</div>
			<button type="button" class="btn btn-outline-danger">Login</button>
		</form>
	</div>
</template>

<script>
export default {
	data: function (){
		return {
			login: {
				email: '',
				password: ''
			}			
		}
	}
}
</script>

<style lang="scss" scoped>
	$badge: #8ABE25;
	$hover: rgb(20, 131, 196);
	$red: #DA3849;

	input:focus {
		outline-color: $red;
	}

	h3 span {
		color: $red;
	}

	form h3 {
		margin-bottom: 40px;
		padding: 10px;
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
	}
</style>


