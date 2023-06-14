import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({item}) => {
  const { id, title, content, state, createdTime } = item
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
          <FontAwesomeIcon icon={faPenToSquare} style={{color: '#00498C', height: '20px'}}/>
          <FontAwesomeIcon icon={faTrashCan} style={{color: '#8B0000', height: '20px'}}/>
        </div>
      </div>
    </div>
   );
}
 
export default CardItem;