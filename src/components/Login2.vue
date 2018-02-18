<template>
	<div>
		<div id="sign-up" class="container ">
			<form action="POST">
				<h3 class="text-center"><span><i class="fas fa-keyboard"></i></span>  LOGIN</h3>
				<div class="form-group">
					<label for="email">Email</label>
					<input v-model.lazy="signUp.email" class="form-control" type="text" name="email" required>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input v-model.lazy="signUp.password" class="form-control" type="password" name="password" required>
				</div>
				
				<button v-on:click.prevent="postVueResource" class="btn btn-outline-danger">Sign up</button>
			</form>
		</div>
        <!-- ********************************************************************************* -->
        <!-- show RESPONSE "console" div -->
        <!-- ********************************************************************************* -->
		<div id="console">
            <div id="clear-console" v-if="error || response" class="">
                <div>
                    <h3 class="text-right"><span v-on:click="resetConsole"><i class="fas fa-times-circle"></i></span></h3>
                </div>
            </div>

			<div class="container">
                <div v-if="response" id="show-response">
                    <h3>
                        RESPONSE <span> <i class="fas fa-terminal"></i></span>
                    </h3>
                    {{responseBody}}
                </div>
                <!-- ********************************************************************************* -->
                <!-- show ERRORS "console" div -->
                <!-- ********************************************************************************* -->
                <div v-else>
                    <div v-for="e in errors" id="show-error">

                        <div class="row">
                            <div class="col-sm-6">
                                <h3>ERRORS  <span> <i class="fas fa-terminal"></i></span></h3>
                            </div>
                            <div id="time" class="col-sm-6 text-right">
                                {{ time[errors.indexOf(e)] }}
                            </div>
                        </div>

                        <p > <span class="bold">Ok:</span> {{ e.ok.toString() }} </p>
                        <p > <span class="bold">Status:</span> {{ e.body.code }} </p>
                        <p > <span class="bold">Status text:</span> {{ e.statusText }} </p>
                        <p > <span class="bold">url:</span> {{ e.url }} </p>
                        <!-- Loop for body error messages -->
                        <div v-for="m in e.body.error.message" id="messages">
                            <p > <span class="bold2">Message {{ e.body.error.message.indexOf(m) + 1 }}:</span> {{ m }} </p>
                        </div>
                        <br>
                        <p id="response-paragraph"> {{ e }} </p>

                    </div>
                </div>
			</div>
		</div>
		<!-- console End -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			response: false,
			error: false,
			signUp: {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				email_promotions: false
			},
			postBody: '',
			responseBody: '',
			errors: [],
			time: []
		}
	},
	methods: {
		postAxios1() {
			axios.post(`http://jsonplaceholder.typicode.com/posts`, {
			body: this.signUp
			})
			.then(response => {})
			.catch(e => {
			this.errors.push(e)
			})
		},

		postAxios2: function() {
			axios.post(`http://jsonplaceholder.typicode.com/posts`, {
				body: this.signUp
			}).then(function(response){
				console.log(response);
			}).catch(function(e){
				this.errors.push(e)
				console.log(this.errors);
			})
		},

		postVueResource: function(){
			// this.$http.post('http://jsonplaceholder.typicode.com/posts', 
			this.$http.post('http://esar-api.nswd.eu/api/v1/login', 
				this.signUp
			).then(function(response){
				this.responseBody = response;
				console.log(data);
			}).catch(function(error){
				this.errors.unshift(error);
				// calling isResponse to update fields for response and error for displaying the "console"
				this.ifResponse();
				this.getTime()
			});
		},

		ifResponse: function() {
			if (this.responseBody !== '') {
				this.response = true;
			} else if (this.errors.length > 0) {
				this.error = true;
			}
				console.log('UPDATED');
		},
		resetConsole: function(){
			this.response = false;
			this.error = false;
			this.signUp = {};
			this.errors = [];
			this.responseBody = '';
			this.time = [];
		},
		addZero: function(num){
			if (num < 10){
				num = "0" + num;
			}
			return num;
		},

		getTime: function(){
			let d = new Date();
			let h = this.addZero(d.getHours());
			let m = this.addZero(d.getMinutes());
			let s = this.addZero(d.getSeconds());
			this.time.unshift(`${h}:${m}:${s}`);
		}

	},
	
}
</script>

<style lang="scss" scoped>
	$badge: #8ABE25;
	$hover: rgb(20, 131, 196);
	$red: #DA3849;
	$font1: "Share Tech Mono";
	$font2: "Nanum Gothic Coding";

	h3 {
		color: $red;
		span:hover {
			color: rgb(145, 21, 21);
		}
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
		margin-top: 12px;;
	}

	#console {
		color: white;
		background-color: black;
		position: absolute;
		width: 100%;
		margin-top: 82px;

		p {
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
			font-size: 16px;
			margin: 0;
			padding: 1;
		}
	}

	#show-response, #show-error {
		padding: 13px;
		h3 {
			color: $red;
			// font-family: "Share tech mono";
			span {
				color: rgb(0, 255, 64);
			}
		}
	}

	#clear-console {
		div {
			margin-right: 13px;
			margin-top: 12px;

			span:hover {
				cursor: pointer;
			}
		}
	}
	#time {
		color: rgb(162, 162, 162);
		font-weight: bold;
	}

	.bold {
		font-weight: bolder;
		// background-color: rgb(52, 169, 42);
		color: rgba(247, 42, 213, 0.953);
	}

	.bold2 {
		font-weight: bolder;
		// background-color: rgb(52, 169, 42);
		color: rgba(247, 206, 42, 0.953);
	}

</style>

