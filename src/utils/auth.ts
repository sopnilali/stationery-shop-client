export const setAuthToken = (token: string | null) => {
    localStorage.setItem('token', token ?? '');
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem('token');
};

export const removeAuthToken = () => {
    localStorage.removeItem('token');
};