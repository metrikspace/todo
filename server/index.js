const application = require('express')();
const config = require('../nuxt.config.js');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
config.dev = process.env.NODE_ENV !== 'production';
async function start() {
	const nuxt = new Nuxt(config);
	const { host, port } = nuxt.options.server;
	await nuxt.ready();
	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	}
	application.use(nuxt.render);
	application.listen(port, host);
	consola.ready({
		badge: true,
		message: `Server listening on http://${host}:${port}`
	});
}
start();
