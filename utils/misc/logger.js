let doesLogDB = true || PROCESS.ENV.DOESLOGDB;

const logDB = (message) => {
	if (doesLogDB) console.log(`[Kollektor.DB] (${new Date().toDateString()}) ${message}`);
};

const log = (message) => {
	console.log(`[Kollektor] (${new Date().toISOString()}) ${message}`);
};

const logError = (message) => {
	console.error(`[Kollektor.ERROR] (${new Date().toDateString()}) ${message}`);
};

export { logDB, log, logError };
