<template lang="pug">
.form
	h3.form_title Create form
	.form_section 
		input.field.form_field(
			type="text" 
			placeholder="First name" 
			v-model="user.firstName"
		)
		input.field.form_field(
			type="text" 
			placeholder="last name"
			v-model="user.lastName"
		)
		input.field.form_field(
			type="text" 
			placeholder="Email"
			v-model="user.email"
		)
		input.field.form_field(
			type="text" 
			placeholder="Phone"
			v-model="user.phone"
		)
	.form_section
		input.field.form_field(
			type="text" 
			placeholder="Street address"
			v-model="user.address.streetAddress"
		)
		input.field.form_field(
			type="text" 
			placeholder="City"
			v-model="user.address.city"
		)
		input.field.form_field(
			type="text" 
			placeholder="State"
			v-model="user.address.state"
		)
		input.field.form_field(
			type="text" 
			placeholder="Zip code"
			v-model="user.address.zip"
		)
	.form_controls
		button.btn.btn--action(@click="submit()") Create
		button.btn.btn--danger(@click="$emit('closeModal')") Cancel

</template>

<script>
import { inject } from 'vue';
import useUsers from '@/compositions/users';

export default {
  setup({}, { emit }) {
    const usersStore = inject('usersStore');
    const { user, valdiateUser, addUser } = useUsers();

    const submit = () => {
      if (valdiateUser(user)) {
        addUser(usersStore.users, user);
        emit('closeModal');
      }
    };

    return {
      user,
      submit,
    };
  },
};
</script>

<style lang="sass">
.form
	&_inner
		display: flex
	&_section
		display: flex
		flex-direction: column
		padding: 5px 0
		border-bottom: 1px solid #ccc
	&_title
		margin: 0
		text-align: center
	&_field
		margin: 5px 0
	&_controls
		display: flex
		justify-content: center
		padding: 10px 0
</style>
