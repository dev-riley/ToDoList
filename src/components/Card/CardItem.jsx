import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { deleteItem, editItem, getList } from "../../api/axios";
import { useEffect, useState } from "react";

const CardItem = ({list}) => {
  const { id, title, content, state, createdTime } = list
  const [ openModal, setOpenModal ] = useState(false);
  const [ newTitle, setNewTitle ] = useState('')
  const [ newContent, setNewContent ] = useState('') 

  const deleteButton = (id) => {
    if (window.confirm('선택하신 할 일을 삭제하시겠습니까?')) {
      deleteItem(id)
        .then(() => {
          console.log('삭제 성공!')
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
  const editButton = (id) => {
    console.log(id)
    const data = {
      "title": newTitle || title,
      "content" : newContent || content,
      "state": state,
    }
    
    editItem(id, data)
      .then((data) => {
        console.log('수정 성공: ', data)
        setOpenModal(false)
      })
      .catch((e) => {
        console.log('실패: ', e)
      })
  }
  

  return ( 
    <div className="flex justify-center">
      <div className="bg-slate-200 w-[330px] m-1 p-3">
        <div className="flex justify-between">
          <p className="font-bold text-xl">{title}</p>
          <p>{createdTime}</p>
        </div>
        <div >
          {content}
        </div>
        <div className="flex justify-end space-x-3">
          <button onClick={() => setOpenModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare} style={{color: '#00498C', height: '20px'}}/>
          </button>
          <button onClick={() => deleteButton(id)}>
            <FontAwesomeIcon icon={faTrashCan} style={{color: '#8B0000', height: '20px'}}/>
          </button>
        </div>
      </div>
      {openModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none ">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="flex flex-col relative border-0 rounded-lg shadow-lg bg-white w-full outline-none py-4 px-8">
              <div>
                <p className="text-4xl font-bold text-center my-4">수정</p>
                <p className="text-2xl text-main font-bold">제목</p>
                <input 
                  type="text"
                  defaultValue={title}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="border-main border-2 w-[600px] h-[40px] my-5 p-2.5 required rounded-md"
                />
              </div>
              <div>
                <p className="text-2xl text-main font-bold">내용</p>
                <textarea
                  rows="5" 
                  type="text"
                  onChange={(e) => setNewContent(e.target.value)}
                  className="border-main border-2 w-[600px] min-h-[70px] my-5 p-2.5 required resize-none rounded-md" 
                >{content}</textarea>
              </div>
              <div className="flex justify-end space-x-3 mb-5">
                <button className="text-red-dark font-bold text-xl w-[100px] px-6 py-2" onClick={() => setOpenModal(false)}>
                  취소
                </button>
                <button 
                  className="bg-main text-white font-bold text-xl w-[130px] rounded-md"
                  onClick={() => editButton(id)}
                  >
                  수정하기
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
   );
}
 
export default CardItem;