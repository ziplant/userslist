<template lang="pug">
.modal
	.modal_back(@click="close()")
	.modal_front
		slot
</template>

<script>
export default {
  setup({}, { emit }) {
    const close = () => {
      emit('closeModal');
    };

    return {
      close,
    };
  },
};
</script>

<style lang="sass">
.modal
	height: 100%
	width: 100%
	position: fixed
	top: 0
	left: 0
	background-color: rgba(0,0,0,0.7)
	&_back
		height: 100%
		width: 100%
	&_front
		background-color: #fff
		padding: 20px 30px
		border-radius: 4px
		position: absolute
		max-width: 100%
		max-height: 100%
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		overflow: auto
</style>
