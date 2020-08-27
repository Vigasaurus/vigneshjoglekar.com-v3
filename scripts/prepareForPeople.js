const fs = require('fs');

const init = async () => {
	let indexData = await fs.readFileSync('dist/index.html', 'utf8');

	indexData = indexData.replace(/src="\//g, 'src="./');
	indexData = indexData.replace(/href="\//g, 'href="./');

	const routeData = await fs.readFileSync('src/App.tsx', 'utf8');

	const routes = [
		'index',
		...[...routeData.matchAll(/path=.*\/([a-zA-Z0-9]+)`/g)].map((e) => e[1]),
	];

	routes.forEach(async (route) => {
		await fs.writeFileSync(`dist/${route}.html`, indexData);
	});
};

init();
