export const state = () => ({
	list: []
});
export const actions = {
	ADD_ITEM: function({ commit }, text) {
		commit('addItem', text);
	},
	RMV_ITEM: function({ commit }, id) {
		commit('rmvItem', id);
	}
};
export const getters = {
	GET_LIST: function(state) {
		return state.list;
	}
};
export const mutations = {
	addItem: function(state, ref) {
		state.list.push({
			id: state.list.length,
			text: ref.value
		});
		ref.value = '';
	},
	rmvItem: function(state, id) {
		let arr = state.list.filter((item) => item.id != id);
		arr.map((item, index) => (item.id = index));
		state.list = arr;
	}
};
