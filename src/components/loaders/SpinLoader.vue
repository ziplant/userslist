<template lang="pug">
.lds
	.lds-dual-ring
</template>

<style lang="sass">
.lds
	display: flex
	height: 100%
	justify-content: center
	align-items: center
	&-dual-ring
		width: 80px
		height: 80px
		&::after
			content: " "
			display: block
			width: 64px
			height: 64px
			margin: 8px
			border-radius: 50%
			border: 6px solid blue
			border-color: blue transparent blue transparent
			animation: lds-dual-ring 1.2s linear infinite

@keyframes lds-dual-ring
	0%
		transform: rotate(0deg)
	100%
		transform: rotate(360deg)
</style>
