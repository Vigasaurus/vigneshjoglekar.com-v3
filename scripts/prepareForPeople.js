const fs = require('fs');

const init = async () => {
	let indexData = await fs.readFileSync('dist/index.html', 'utf8');
	const hash = indexData.match(/vendor\.([a-zA-Z0-9]+)\.js/)[1];

	indexData = indexData.replace(/src="\//g, 'src="./');
	indexData = indexData.replace(/href="\//g, 'href="./');

	const routeData = await fs.readFileSync('src/App.tsx', 'utf8');

	const routes = [
		'index',
		...[...routeData.matchAll(/path=.*\}([a-zA-Z0-9]+)`/g)].map((e) => e[1]),
	];

	routes.forEach(async (route) => {
		await fs.writeFileSync(`dist/${route}.html`, indexData);
	});

	let cssData = await fs.readFileSync(`dist/built.${hash}.css`, 'utf8');

	cssData = cssData.replace(/\(\/assets/g, '(./assets');

	await fs.writeFileSync(`dist/built.${hash}.css`, cssData);
};

init();
