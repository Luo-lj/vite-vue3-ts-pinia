import request from '@/utils/axios'

interface ResponseType<P = {}> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}

interface Login {
  token: string;
  expires: number;
}

export const login = (username: string, password: string) => {
  return request<ResponseType<Login>>({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}