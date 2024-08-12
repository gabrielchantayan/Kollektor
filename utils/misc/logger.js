let doesLogDB = true || PROCESS.ENV.DOESLOGDB;

const logDB = (message) => {
	if (doesLogDB) console.log(`[Kollektor.DB] ${message}`);
};

const log = (message) => {
	console.log(`[Kollektor] ${message}`);
};

const logError = (message) => {
	console.error(`[Kollektor.ERROR] ${message}`);
};

export { logDB, log, logError };
