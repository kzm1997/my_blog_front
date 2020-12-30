import httpRequest from '@/utils/httpRequest';


export function login(userForm) {
    return httpRequest({
        method: 'post',
        data: userForm,
        url: '/userlogin/login'
    })
}

export function getUserInfo() {
    return httpRequest({
        method: 'get',
        url: '/user/getUser'
    })
}

export function checkForm(key,value) {
    return httpRequest({
        url:'/user/checkForm',
         params:{
            'key':key,
            'value':value
        },
        method:'get'
    })
}
export function userEdit(data) {
    return httpRequest({
        url:'/user//edit',
        method:'post',
        data:data
    })
}

export function changePassword(data) {
     return httpRequest({
         url:'/user/modifypasswd',
         method:'post',
         data:data
     })
}

export function changeEmail(data) {
    return httpRequest({
        url:'/user/editEmail',
        method:'post',
        data:data
    })
}

export function getUserRecommed() {
    return httpRequest({
        url:'/user/referral',
        method:'get'
    })
}

export function UserLike(userId,type) {
    return httpRequest({
        url:'/user/like',
        method:'get',
        params:{
          userId:userId,
            type:type
        }
    })
}

export function getMyArticles() {
   return httpRequest({
       url:'/user/userArticle',
       method:'get'
   })
}

export function getDynamic() {
  return httpRequest({
      url:'/user/userDynamic',
      method:'get'
  })
}

export function getMyArticleComment() {
    return httpRequest({
        url:'/user/myComment',
        method:'get'
    })
}

export function getMyHot() {
    return httpRequest({
        url:'/user/myHot',
        method:'get'
    })
}

export function getTimeLine() {
    return httpRequest({
        url:'/user/timeLine',
        method:'get'
    })
}

export function loginout() {
   return httpRequest({
       url:'/userlogin/logout',
       method:'get'
   })
}

export function register(data) {
   return httpRequest({
       url:'/userlogin/register',
       method:'post',
       data:data
   })
}