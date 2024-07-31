import { copyFile, readdir } from 'fs/promises';
import * as logger from '../../utils/misc/logger.js';
import * as db from '../../utils/database/mongo.js';

const initializeDatabase = async () => {
	logger.logDB('Initializing database...');
	await db.createCollection('collections');
	logger.logDB('Finished initializing database.');
};


const initialize = async () => {
	logger.log('Initializing server...');
	logger.log(`Admin portal password: ${process.env.ADMIN_PASSWORD}`);


    logger.log('Checking config files...');

	// Create a list of all files in /config
	const configDir = './config';
	const configFiles = await readdir(configDir);

	// Create a list of all files in /defaults/config
	const defaultConfigDir = './defaults/config';
	const defaultConfigFiles = await readdir(defaultConfigDir);

	// Copy any files that dont exist in /config from /defaults/config
	for (const file of defaultConfigFiles) {
		if (!configFiles.includes(file)) {
            logger.log(`Copying ${file}...`);
			await copyFile(`${defaultConfigDir}/${file}`, `${configDir}/${file}`);
		}
	}

    logger.log('Finished initializing server.');
};

export default initialize;
