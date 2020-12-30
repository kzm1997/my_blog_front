import httpRequest from '@/utils/httpRequest';

export function postComment(comment) {
     return httpRequest({
         method:'post',
         url:'/comment/postComment',
         data:comment
     })
}
export function getAllComments(query) {
    return httpRequest({
        method:'get',
        url:'/comment/getAllComment',
        params:{
            id:query.id,
            pageNum:query.pageNum,
            pageSize:query.pageSize
        }
    })
}

export function postSonComments(data) {
    return httpRequest({
     method:'post',
     url:'/comment/postSonComment',
      data:data
    })
}

export function getCount(id) {
    return httpRequest({
        method:'get',
        url:'/comment/getCount',
        params:{
            id:id
        }
    })
}
export function doLike(data) {
     return httpRequest({
         method:'post',
         url:'/comment//like',
         data:data
     })
}
export function deleteComment(id) {
    return httpRequest({
        method:'get',
        url:'/comment/deleteComment',
        params:{
            id:id
        }
    })
}