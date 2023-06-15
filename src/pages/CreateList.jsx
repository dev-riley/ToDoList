import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { createItem } from "../api/axios";

const CreateList = () => {
  const navigate = useNavigate();
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  const toMainPage = () => {
    navigate('/')
  }


  const submitItem = () => {
    let time = moment().format("HH:mm")
    const data = {
      "title": title,
      "content": content,
      "state": "todo",
      "createdTime": time
    }

    createItem(data) 
      .then(() => {
        console.log('등록 성공')
        navigate('/')
      })
      .catch((e) => {
        console.log("실패: ", e)
      })

  }

  return(
    <div className="flex h-screen justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-[50px]">할 일 추가</h1>
        <div className="w-full flex justify-end">
          <button className="w-[130px] h-[40px] bg-main text-white text-2xl rounded-sm mt-10" onClick={toMainPage}>목록</button>
        </div>
        <div className="my-10">
          <form>
            <p className="text-xl text-main font-bold">제목</p>
            <input 
              id="title"
              type="text"
              onChange={(e) => {setTitle(e.target.value)}}
              className="border-main border-2 w-[700px] h-[40px] my-5 required"
            />
            <p className="text-main font-bold text-xl">내용</p>
            <textarea 
              rows="8"
              onChange={(e) => {setContent(e.target.value)}}
              className="border-main border-2 w-[700px] min-h-[60px] my-5 required resize-none" 
            >
            </textarea>
          </form>
        </div>
        <button className="bg-main text-white text-2xl rounded-sm w-[130px] h-[40px]" onClick={submitItem}>추가</button>
      </div>
    </div>
  )
}
export default CreateList;