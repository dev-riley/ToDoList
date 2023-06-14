import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { deleteItem } from "../../api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({item}) => {
  const { id, title, content, state, createdTime } = item
  const navigate = useNavigate();

  const deleteButton = (id) => {
    deleteItem(id)
      .then(() => {
        console.log('삭제 성공!')
        navigate('/')
      })
      .catch((e) => {
        console.log(e)
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
          <button>
            <FontAwesomeIcon icon={faPenToSquare} style={{color: '#00498C', height: '20px'}}/>
          </button>
          <button onClick={() => deleteButton(id)}>
            <FontAwesomeIcon icon={faTrashCan} style={{color: '#8B0000', height: '20px'}}/>
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default CardItem;