var today = new Date();
    today.setDate(today.getDate() + 30);

// TODO add security on cookie for production

const Auth = {
    isAuthenticated: () => {
        let authCookie = document.cookie.replace(/(?:(?:^|.*;\s*)_auth\s*=\s*([^;]*).*$)|^.*$/, "$1"); 
        return authCookie || false;
    },

    signin: (token) => {
        // TODO add secure flag and domain protection for production
        // removed domain to fix bug with IE11 not writing the cookie if domain is set to blank
        let cookie = `_auth=${token}; path=/; expires=${today.toUTCString()};`;
        document.cookie = cookie;
    },
    
    signout: () => {
        let cookie = `_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        document.cookie = cookie;
    }
};

export default Auth;