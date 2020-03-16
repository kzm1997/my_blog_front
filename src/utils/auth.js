import Cookies from 'js-cookie'

const ToekenKey = 'Authentication'

 export  default {
    getToken() {
        return Cookies.get(ToekenKey)
    },
    setToken(token) {
        return Cookies.set(ToekenKey,token);
    },
    remmoveToken() {
        return Cookies.remove(ToekenKey);
    }
}



