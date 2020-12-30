import httpRequest from '@/utils/httpRequest';


export function publishArticle(article) {
    return httpRequest({
        url:'/article/publish',
        method:'post',
        data:article
    })
}
export function getArticleByCategory(id,pageNum,pageSize) {
     return httpRequest({
         url:'/article/getArticles',
         method:'get',
         params:{
             id:id,
             pageNum:pageNum,
             pageSize:pageSize
         }
     })
}
export function getArticle(id) {
    return httpRequest({
        url:'/article/'+id,
        method:'get'
    })
}

export function getEditArticle(id) {
    return httpRequest({
        method:'get',
        url:'/article/getEditArticle',
        params:{
            id:id
        }
    })
}
export function updateArticle(article) {
    return httpRequest({
        method:'post',
        url:'/article/update',
        data:article
    })
}

export function deleteArticle(id) {
    return httpRequest({
        method:'get',
        url:'/article/delte/'+id
    })
}