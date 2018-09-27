import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/blog/list',
    method: 'post',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/blog/detail',
    method: 'get',
    params: {
      id
    }
  })
}

// export function fetchPv(pv) {
//   return request({
//     url: '/article/pv',
//     method: 'get',
//     params: { pv }
//   })
// }

export function createArticle(data) {
  return request({
    url: '/blog/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/blog/update',
    method: 'post',
    data
  })
}
