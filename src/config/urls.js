const API_BASE_URL = 'http://143.110.247.144'
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const GET_CHATS = getApiUrl('/chat');