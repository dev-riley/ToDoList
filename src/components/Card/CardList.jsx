import { useEffect, useState } from "react";
import { getList } from "../../api/axios";
import CardItem from "./CardItem";

const CardList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
      .then((res) => setList(res.data))
  }, [])
  // console.log(list)
  return ( 
    <div>
      <div>
        {list.map(item => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
   );
}
 
export default CardList;