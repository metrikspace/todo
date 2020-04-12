<template>
	<section>
		<input placeholder="Add todo item" type="text" ref="add" />
		<button v-on:click="addItem($refs.add)">+</button>
	</section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
	methods: {
		...mapActions({
			addItem: 'ADD_ITEM'
		})
	}
};
</script>
<style lang="scss" scoped>
section {
	display: grid;
	grid-template-columns: auto 3rem;
	grid-template-rows: 3rem;
	padding: 1rem;
	& > input {
		border-radius: 0;
		border: none;
		outline: none;
		padding-left: 1rem;
	}
	& > button {
		align-items: center;
		background: green;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		border: 1px solid black;
		color: white;
		cursor: pointer;
		display: flex;
		font-size: 2.5rem;
		justify-content: center;
		outline: none;
		height: 100%;
		width: 100%;
		&:focus {
			outline: none;
		}
		&::-moz-focus-inner {
			border: 0;
		}
	}
}
</style>