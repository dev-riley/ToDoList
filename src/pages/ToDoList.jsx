import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimeComponent from '../components/Date.jsx'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import CardList from '../components/Card/CardList.jsx';

const ToDoList = () => {
  const navigate = useNavigate();
  const toCreatePage = () => {
    navigate('/create')
  }
  const categories = [
    {name: "할 일", id: 'todo'},
    {name: "진행 중", id: 'proceeding'},
    {name: "완료", id: 'complete'},
  ]

  return(
    <div className='container'>
      {/* 날짜, 시간 */}
      <DateTimeComponent />
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <p className="text-5xl font-bold mr-[70px]">To Do List</p>
          <button>
            <FontAwesomeIcon onClick={toCreatePage} icon={faCirclePlus} style={{color: '#00498C', height: '65px', width: '65px'}}/>
          </button>
        </div>
        <div className='flex justify-evenly mt-[70px]'>
          {/* 할일 */}
          {categories.map((category) => {
            return (
              <div>
                <p className='font-bold text-xl text-center mb-3'>{category.name}</p>
                <div className="border-2 border-main w-[350px] h-[300px]">
                  <CardList />
                </div>
              </div>
            )
          })}
      </div>
      </div>
    </div>
  )
}
export default ToDoList;