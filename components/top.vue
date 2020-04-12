<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>
<script>
export default {
	props: {
		title: String
	}
};
</script>
<style lang="scss" scoped>
header {
	align-items: center;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	border: 1px solid white;
	display: flex;
	justify-content: center;
	& > h1 {
	}
}
</style>