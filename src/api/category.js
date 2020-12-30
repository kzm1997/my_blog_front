import httpRequest from '@/utils/httpRequest';

export function getAllCategory() {
    return httpRequest({
        method:'get',
        url:'/category/getAllCategory'
    })
}

export function getTagsById(id) {
     return httpRequest({
         method:'get',
         url:'/category/tagByCategory',
         params:{
             categoryId:id
         }
     })
}

export function getCategoryIndex() {
    return httpRequest({
         method:'get',
         url:'/category/index'
    })
}

export function getHot() {
    return httpRequest({
        method:'get',
        url:'/category/getHot'
    })
}

export function getCategoryDetail(id,pageize,pageNum) {
    return httpRequest({
        method:'get',
        url:'/category/detail',
        params:{
            id:id,
            pageNum:pageNum,
            pageSize:pageize
        }
    })
}
export function getCategoryName(id) {
    return httpRequest({
        method:'get',
        url: '/category/getCategoryName',
        params:{
            id
        }
    })
}

export function getCategoryMessage(id) {
    return httpRequest({
        method:'get',
        url:'/category/CategoryMessage',
        params:{
            id:id
        }
    })
}

export function articleSearch(keyword) {
   return httpRequest({
       method:'get',
       url:'/search',
       params:{
           keyword:keyword
       }
   })
}




