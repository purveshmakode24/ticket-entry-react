declare const window: any;

export const DEBUG = false; // Keep false in production
export const REACT_APP_VERSION = window.REACT_APP_VERSION as string;
console.log('DEBUG', DEBUG);
export const API_ROOT_URL = DEBUG ?
    'http://localhost:8000/api/' :
    'https://ticket-entry-backend.vercel.app/api/' as string;

console.log('API_ROOT_URL', API_ROOT_URL);