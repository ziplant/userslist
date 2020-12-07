<template lang="pug">
Suspense
	template(#default)
		.container
			.row.row--between
				button.btn(@click="openAddToggle()") Add
				input.filter.field(
					type="text"
					placeholder="Type to search"
					v-model="filterData"
				)
			hr
			UserList(:users="filteredUsers")
			Teleport(to="#modal")
				ModalWindow(v-if="isAddToggle" @closeModal="closeAddToggle()")
					UserCreateForm(@closeModal="closeAddToggle()")
	template(#fallback)
		SpinLoader
</template>

<script>
import { provide, ref, computed } from 'vue';
import useUsers from '@/compositions/users';
import useToggle from '@/compositions/toggle';
import UserList from '@/components/users/UserList';
import UserCreateForm from '@/components/users/UserCreateForm';
import UserFilter from '@/components/users/UserFilter';
import SpinLoader from '@/components/loaders/SpinLoader';
import ModalWindow from '@/components/modal/ModalWindow';

export default {
  name: 'App',
  setup() {
    const { usersStore, filterUsers } = useUsers();
    provide('usersStore', usersStore);

    const {
      isToggleOpen: isAddToggle,
      openToggle: openAddToggle,
      closeToggle: closeAddToggle,
    } = useToggle();

    const filterData = ref('');

    const filteredUsers = computed(() => {
      return filterUsers(usersStore.users, filterData.value);
    });

    return {
      isAddToggle,
      openAddToggle,
      closeAddToggle,
      filterData,
      filteredUsers,
    };
  },
  components: {
    UserList,
    UserCreateForm,
    UserFilter,
    SpinLoader,
    ModalWindow,
  },
};
</script>

<style lang="sass">
html,
body
	height: 100%

body
	margin: 0
	font-family: arial, sans-serif
	& *
		box-sizing: border-box

hr
	border: none
	border-bottom: 1px solid #ccc

#app
	height: inherit
	padding: 5px

.container
	width: 90%
	margin: auto
	@media screen and (max-width: 768px)
		width: 100%

.row
	display: flex
	padding: 10px 0px
	&--between
		justify-content: space-between

.btn
	$bgColor: #118ab2
	$bgColorDanger: #ef476f
	$bgColorWarning: #ffd166
	$bgColorAction: #05C793
	display: inline-block
	box-sizing: border-box
	min-width: 90px
	padding: 10px 15px
	border: none
	border-radius: 3px
	text-decoration: none
	font-size: 14px
	line-height: 14px
	color: #000
	background-color: $bgColor
	text-align: center
	cursor: pointer
	user-select: none
	color: #fff
	&:hover
		background-color: darken($bgColor, 10)
	&:not(:last-child)
		margin-right: 10px
	&--danger
		background-color: $bgColorDanger
		&:hover
			background-color: darken($bgColorDanger, 10)
	&--warning
		background-color: $bgColorWarning
		&:hover
			background-color: darken($bgColorWarning, 10)
		color: #000
	&--action
		background-color: $bgColorAction
		&:hover
			background-color: darken($bgColorAction, 10)
	&--disabled
		pointer-events: none
		opacity: .8

.table
	overflow: auto
	height: 400px
	&_inner
		width: 100%
		min-width: 600px
		border-collapse: collapse
	&_row
		background-color: #eee
		&:nth-child(2n)
			background-color: #ddd
		&--head
			filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, .5))

	&_cell
		padding: 10px
		&--head
			background-color: #fff
			position: sticky
			top: 0px

.field
	border-radius: 4px
	border: 1px solid #ccc
	font-family: arial, sans-serif
	padding: 5px 10px

.filter
	width: 50%
	max-width: 300px
	min-width: 100px
</style>
