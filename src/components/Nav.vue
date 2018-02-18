<template>
	<div id="nav" class="d-flex  flex-md-row align-items-center bg-light border-bottom  p-3 px-md-4 mb-3  box-shadow">
		<a target="_blank" href="https://nswebdevelopment.com/"><img src="../assets/images/nswd.png" alt=""></a> 
		<a target="_blank" class="my-0 mr-md-auto font-weight-normal badge " href="http://esar-api.nswd.eu/docs/">ESAR api</a>

	</div>
</template>



<style lang="scss" scoped>

	$badge: #8ABE25;
	$hover: rgb(20, 131, 196);

	#nav img {
		max-height: 20px;
	}

	#nav a:nth-child(2) {
		background-color: $hover;
		color: white;
	}

	#nav a:nth-child(2):hover {
		background-color: $badge;
		font-weight: bold;
		text-decoration: none;
	}






</style>
