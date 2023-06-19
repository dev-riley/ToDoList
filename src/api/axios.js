import axios from 'axios';

// 전체 티켓 목록 조회하기
export const getList = async () => {
  return await axios({
    method: 'GET',
    url: 'http://localhost:8000/list'
  })
}

// 티켓 등록하기
export const createItem = async (data) => {
  return await axios({
    method: 'POST',
    url: 'http://localhost:8000/list',
    headers: {
      "Content-Type" : "application/json"
    },
    data: data
  })
}

// 티켓 수정하기
export const editItem = async (id, data) => {
  return await axios({
    method: 'PUT',
    url: `http://localhost:8000/list/${id}`,
    headers: {
      "Content-Type" : "application/json"
    },
    data: data
  })
}

// 티켓 삭제하기 
export const deleteItem = async (id) => {
  return await axios({
    method: 'DELETE',
    url: `http://localhost:8000/list/${id}`,
    headers: {
      "Content-Type" : "application/json"
    }
  })
}