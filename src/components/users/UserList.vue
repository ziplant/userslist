<template lang="pug">
.table
	table.table_inner
		thead
			tr.table_row.table_row--head
				th.table_cell.table_cell--head First name
				th.table_cell.table_cell--head Last name
				th.table_cell.table_cell--head Email
				th.table_cell.table_cell--head Phone
				th.table_cell.table_cell--head Address
		tbody
			UserItem(
				v-for="user in users"
				:key="user.phone"
				:user="user"
			)
</template>

<script>
import { inject } from 'vue';
import useUsers from '@/compositions/users';
import UserItem from './UserItem';

export default {
  props: ['users'],
  async setup() {
    const usersStore = inject('usersStore');
    const { fetchUsers } = useUsers();

    usersStore.users = await fetchUsers();

    return {
      usersStore,
    };
  },
  components: {
    UserItem,
  },
};
</script>

<style lang="sass"></style>
