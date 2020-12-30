import Cookies from 'js-cookie'

const ToekenKey = 'Authentication'

 export  default {
    getToken() {
        return Cookies.get(ToekenKey)
    },
    setToken(token) {
        return Cookies.set(ToekenKey,token);
    },
    removeToken() {
        return Cookies.remove(ToekenKey);
    }
}



