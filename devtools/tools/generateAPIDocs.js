import { readFile, writeFile } from 'fs/promises';

const main = async () => {
	// Read the apiRoutes.json file
	const apiRoutes = JSON.parse(await readFile('./devtools/editables/apiRoutes.json'));

	// Empty docs variable
	let docs = '# API Documentation\n\n';

	// Iterate through apiRoutes
	for (const [category, categoryData] of Object.entries(apiRoutes)) {
		// Add a header for the category
		docs += `\n\n## ${category.toUpperCase()}\n\n`;

		// Iterate through categoryData
		for (const [route, routeData] of Object.entries(categoryData)) {
			// Add route name
			docs += `### ${routeData['name']}\n\n`;

			// Add description
			docs += `${routeData['description']}\n\n`;

			// Add type
			docs += `**Type**: ${routeData['type']}\n\n`;

			// Add call
			docs += `**Call**: \`/api/${category}/${route}\`\n\n`;

			// Open the file that the route points to and grab the JSDoc comments for the function

			const routeFilePath = `./${routeData['primaryFunctionFile']}`;
			const routeFile = await readFile(routeFilePath, 'utf-8');
			const routeFunctionName = routeData['primaryFunction'];


			// Find the JSDoc comments for the function and the function name on the next line with a regex
            const jsdocComments = routeFile.match(
				/\/\*\*[\s\S]*?\*\/\nconst[\s\S][a-zA-Z]*[\s?]=[\s?](?:async?)[\s?](?:\([a-zA-Z\s,?]*\))/g
			);

			if (jsdocComments) {
				// Iterate through the JSDoc comments
				for (const jsdocComment of jsdocComments) {
					// Check if the JSDoc comment contains the function name
					if (jsdocComment.includes(`const ${routeFunctionName}`)) {
						// Add the JSDoc comments for the function
						docs += `**JSDoc**\n\n \`\`\` ${jsdocComment} \n \`\`\` \n\n`;
						break;
					}
				}
			}

		}
	}

	// Write to docs.md
	await writeFile('./docs/api.md', docs);
};

main();
