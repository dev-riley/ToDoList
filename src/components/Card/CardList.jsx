import { useEffect, useState } from "react";
import { getList } from "../../api/axios";
import CardItem from "./CardItem";

const CardList = ({lists}) => {

  return ( 
    <div>
      <div>
        {lists.map((list) => (
          <CardItem key={list.id} list={list} />
        ))}
      </div>
    </div>
   );
}
 
export default CardList;