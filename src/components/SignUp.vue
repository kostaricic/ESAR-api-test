<template>
	<div id="sign-up" class="container ">
		<form action="POST">
			<h3 class="text-center"><span><i class="fas fa-keyboard"></i></span>  SIGN UP</h3>
			<!-- <i class="fas fa-keyboard"></i> -->
			<div id="form-names" class="form-row">
				<div class="form-group col-md-6">
					<label for="first">First Name</label>
					<input class="form-control" type="text" name="first" required>
				</div>
				<div class="col-md-6">
					<label for="last">Last Name</label>
					<input class="form-control" type="text" name="last" required>
				</div>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input class="form-control" type="text" name="email" required>
			</div>
			<div class="form-group">
				<label for="email">Password</label>
				<input class="form-control" type="password" name="email"required>
			</div>
			<button type="submit" class="btn btn-outline-danger">Sign up</button>
		</form>
	</div>
</template>

<script>
export default {
  
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
		background-image: url(../assets/images/form-background4.png);
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

