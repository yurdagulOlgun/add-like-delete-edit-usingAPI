import styled from "styled-components";
import heart from "../assets/heart.png";
import clickedHeart from "../assets/clickedHeart.png";
import edit from "../assets/edit.png";
import dellete from "../assets/delete.png";
import line from "../assets/line.png";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favorite";
import {deleteUserRedux} from "../redux/delete"
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FavEditDel({ item }) {
  // const params = useParams();
// console.log(params.id);
  const [data,setData] = useState()
  const [userID, setUserID] = useState()
  const dispatch = useDispatch();
  const { favorites, deleteUser } = useSelector((state) => state);

  // console.log(data?.isDeleted);
// console.log(userID);
  const isFav = favorites?.some((fav) => fav.id === item.id);
  // const isDelete = deleteUser?.some((del) => del.id === item.id)

  // const deleteClickHandler = () => {
  //   setUserID(e.target.id) 
  //   dispatch(deleteUserRedux(item.id))
  // }

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/users/${userID}`, {
  //     method: "DELETE",
  //   }).then((res) => res.json()).then((json) => {
  //     setData(json)
      
  //   })
  // }, [isDelete,userID]);

  // console.log(data);

  return (
    <>
      {isFav ? (
        <BottomIcons
          src={clickedHeart}
          style={{ width: "22px", height: "22px" }}
          onClick={() => dispatch(removeFavorite(item.id))}
        />
      ) : (
        <BottomIcons
          src={heart}
          onClick={() => dispatch(addFavorite(item.id))}
        />
      )}

      <BottomIcons src={line} />
      <BottomIcons src={edit} />
      <BottomIcons src={line} /> <Link to={":id"} >
      <BottomIcons src={dellete}  /> </Link>
    </>
  );
}

const BottomIcons = styled.img`
  padding: 5px 10px 5px 25px;
`;
