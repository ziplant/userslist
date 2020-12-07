<template lang="pug">
tr.table_row
	td.table_cell {{user.firstName}}
	td.table_cell {{user.lastName}}
	td.table_cell {{user.email}}
	td.table_cell {{user.phone}}
	td.table_cell 
		|{{user.address.streetAddress}},
		|{{user.address.city}},
		|{{user.address.state}},
		|{{user.address.zip}}

</template>

<script>
export default {
	props: ['user'],
	setup() {

	}
};
</script>

<style lang="sass">
</style>
