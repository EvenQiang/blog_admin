import request from '@/utils/request'

export function userSearch(name) {
  return request({
    url: '/user/searchUser',
    method: 'get',
    params: {
      name
    }
  })
}
