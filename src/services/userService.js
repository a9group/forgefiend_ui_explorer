import api, { route } from '@forge/api';

export const fetchUserDetails = async () => {
    try {
        const res = await api.asUser().requestJira(route`/rest/api/3/myself`);
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch user details:', error);
        throw error;
    }
};