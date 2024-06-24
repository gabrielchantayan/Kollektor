import { successHandler } from '../misc/miscUtils.js';

const adminPortalPassword = process.env.ADMIN_PASSWORD || 'password';


const login = (password) => {
	if (password.body.password == adminPortalPassword) return successHandler(true);
	else return successHandler(false, 'passIncorrect');
}


export { login }