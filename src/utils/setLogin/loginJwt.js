export const setJwLocalStorage = (token) => {
    localStorage.setItem('token', token);
}

export const getJwt = () => {
    return localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');

    window.location.reload(); // Recarga completa de la página

};