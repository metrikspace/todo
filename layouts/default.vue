<template>
	<nuxt />
</template>
<style lang="scss">
html {
	-moz-osx-font-smoothing: grayscale;
	-ms-text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: 100%;
	box-sizing: border-box;
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	word-spacing: 1px;
}
body {
	background-image: linear-gradient(
		to bottom,
		rgba(14, 14, 14, 1),
		rgba(15, 15, 15, 0.98),
		rgba(16, 16, 16, 0.97),
		rgba(17, 17, 17, 0.96),
		rgba(18, 18, 18, 0.96),
		rgba(18, 18, 18, 0.95),
		rgba(18, 18, 18, 0.96),
		rgba(17, 17, 17, 0.96),
		rgba(16, 16, 16, 0.97),
		rgba(15, 15, 15, 0.98),
		rgba(14, 14, 14, 1)
	);
	background-repeat: no-repeat;
	background-size: cover;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	border: 1px solid white;
	box-sizing: border-box;
	color: rgb(226, 146, 146);
	font-weight: 400;
	line-height: 1.6;
	min-height: 100vh;
	min-width: 100vw;
	@media screen and (max-width: 600px) {
		min-height: 93vh;
	}
}
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
</style>
