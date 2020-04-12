<template>
	<section>
		<ul>
			<li v-for="(item) in list" v-bind:key="item.id">
				<div>
					<span>{{item.text}}</span>
					<span v-on:click="rmvItem(item.id)">&#10007;</span>
				</div>
			</li>
		</ul>
	</section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			list: 'GET_LIST'
		})
	},
	methods: {
		...mapActions({
			rmvItem: 'RMV_ITEM'
		})
	}
};
</script>
<style lang="scss" scoped>
section {
	padding: 1rem 1rem 1rem 2.5rem;
	& > ul {
		list-style-type: decimal;
		& > li {
			font-size: 1.5rem;
			& > div {
				align-items: center;
				display: grid;
				grid-template-columns: auto min-content;
				grid-template-rows: min-content;
				&:not(&:last-child) {
					margin-bottom: 1rem;
				}
				& > span:nth-of-type(1) {
					padding-left: 1rem;
					justify-self: start;
				}
				& > span:nth-of-type(2) {
					padding-right: 1rem;
					cursor: pointer;
					font-size: 1.3rem;
					display: flex;
					justify-self: end;
				}
			}
		}
	}
}
</style>