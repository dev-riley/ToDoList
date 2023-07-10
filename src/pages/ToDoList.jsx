import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { getList } from "../api/axios";
import DateTimeComponent from '../components/Date.jsx'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CardList from '../components/Card/CardList.jsx';

const ToDoList = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([])
  const [visibleLists, setVisibleLists ] = useState([])
  const [showMoreCount, setShowMoreCount] = useState(5);
  const [isExpanded, setIsExpanded ] = useState(false);

  useEffect(() => {
    getList()
      .then((res) => setLists(res.data))
  }, [])

  useEffect(() => {
    setVisibleLists(lists.slice(0, showMoreCount));
  }, [lists, showMoreCount])

  const toCreatePage = () => {
    navigate('/create')
  }
  const categories = [
    {name: "할 일", id: 'todo'},
    {name: "진행 중", id: 'proceeding'},
    {name: "완료", id: 'complete'},
  ]

  const handleShowMore = () => {
    setShowMoreCount((prev) => prev + 3);
  }

  const handleCollapse = () => {
    // setIsExpanded(false);
    setShowMoreCount(5);
  }

  // const handleExpand = () => {
  //   setIsExpanded(true);
  //   setShowMoreCount(lists.length)
  // }

  const isMoreToShow = () => {
    return showMoreCount < lists.length;
  };

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
        <div className='flex justify-evenly'>
          {/* 할일 */}
          {categories.map((category) => {
            const filteredLists = lists.filter((list) => list.state === category.id)
            const displayedLists = visibleLists.filter((list) => list.state === category.id)
            
            return (
              <div className='mt-12' key={category.id}>
                <p className='font-bold text-2xl text-center mb-3'>{category.name}</p>
                  <div className="border-2 border-main w-[350px]">
                    {displayedLists.length > 0 ? (
                      <CardList lists={displayedLists} />  
                    ) : null }
                  </div>
                  {/* {filteredLists.length > showMoreCount ? (
                    isExpanded ? (
                      <div className='border-2 border-main h-[40px] text-xl font-bold text-center'>
                        <button onClick={handleCollapse}>
                          접기
                          <FontAwesomeIcon icon={faArrowUp} className='ml-2' />
                        </button>
                    </div>
                    ) : (
                      <div className='border-2 border-main h-[40px] text-xl font-bold text-center'>
                        <button onClick={handleExpand} >
                          더보기
                          <FontAwesomeIcon icon={faArrowDown} className='ml-2'/>
                        </button>
                      </div>
                    )
                  ) : null} */}
                  {/* {filteredLists.length > showMoreCount && (
                    <div className='border-2 border-main h-[40px] text-xl font-bold text-center'>
                      <button onClick={handleShowMore} >
                        더보기
                        <FontAwesomeIcon icon={faArrowDown} className='ml-2'/>
                      </button>
                    </div>
                  )}
                  {(filteredLists.length + 1) === showMoreCount && (
                    <div className='border-2 border-main h-[40px] text-xl font-bold text-center'>
                      <button onClick={handleCollapse}>
                        접기
                        <FontAwesomeIcon icon={faArrowUp} className='ml-2' />
                      </button>
                    </div>
                  )} */}
                {isMoreToShow() && (
                  <div className='border-2 border-main h-[40px] text-xl font-bold text-center'>
                    {showMoreCount <= 5  ? (
                      <button onClick={handleShowMore}>
                        더보기
                        <FontAwesomeIcon icon={faArrowDown} className='ml-2' />
                      </button>
                    ) : (
                      <button onClick={handleCollapse}>
                        접기
                        <FontAwesomeIcon icon={faArrowUp} className='ml-2' />
                      </button>
                    )}
                  </div>
                )}  
              </div>
            )
          })}
      </div>
      <div className='h-[200px]'></div>
      </div>
    </div>
  )
}
export default ToDoList;