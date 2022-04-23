import styled from "styled-components";
import heart from "../assets/heart.png";
import clickedHeart from "../assets/clickedHeart.png"
import edit from "../assets/edit.png";
import dellete from "../assets/delete.png";
import line from "../assets/line.png";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favorite";

export default function FavEditDel({item}) {

    const dispatch = useDispatch();
    const {favorites} = useSelector((state) =>state);

    const isFav = favorites?.some((fav) => (fav.id === item.id))

  return (
    <>
      {
          isFav ? (<BottomIcons src={clickedHeart} style={{width:"22px", height:"22px"}} onClick={() => dispatch(removeFavorite(item.id))} /> ) : (
              <BottomIcons src={heart} onClick={() => dispatch(addFavorite(item.id)) } /> 
          )
      }
      
      <BottomIcons src={line} />
      <BottomIcons src={edit} />
      <BottomIcons src={line} />
      <BottomIcons src={dellete} />
    </>
  );
}

const BottomIcons = styled.img`
  padding: 5px 10px 5px 25px;
`;
