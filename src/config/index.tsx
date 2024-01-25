export const DEBUG = false; // Keep false in production
export const APP_VERSION = '1.0.0';
export const API_ROOT_URL = DEBUG ?
    'http://localhost:8000/api/' :
    'https://ticket-entry-backend.vercel.app/api/';