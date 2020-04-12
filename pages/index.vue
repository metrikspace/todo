<template>
	<div>
		<top v-bind:title="title" />
		<additem />
		<listitem />
	</div>
</template>
<script>
import AddItem from '@/components/additem.vue';
import ListItem from '@/components/listitem.vue';
import Top from '@/components/top.vue';
export default {
	data() {
		return {
			title: 'My Todo List'
		};
	},
	components: {
		additem: AddItem,
		top: Top,
		listitem: ListItem
	}
};
</script>
<style lang="scss" scoped>
</style>