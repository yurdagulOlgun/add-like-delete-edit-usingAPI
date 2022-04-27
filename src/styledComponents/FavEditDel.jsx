import styled from "styled-components";
import heart from "../assets/heart.png";
import clickedHeart from "../assets/clickedHeart.png";
import edit from "../assets/edit.png";
import dellete from "../assets/delete.png";
import line from "../assets/line.png";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favorite";
import hoverDelete from "../assets/hoverDelete.png";
import hoverEdit from "../assets/hoverEdit.png";

export default function FavEditDel({ item, popupHandler,delButtonHandler,editClickHandler }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);

  const isFav = favorites?.some((fav) => fav.id === item.id);

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
      <BottomIcons
        src={edit}
        style={{ width: "19px", height: "19px" }}
        onClick={ () =>  {popupHandler(item.id); }}
        onMouseOver={(e) => (e.currentTarget.src = `${hoverEdit}`)}
        onMouseOut={(e) => (e.currentTarget.src = `${edit}`)}
      />
      <BottomIcons src={line} />
      <BottomIcons
        src={dellete}
        onClick={()=> {delButtonHandler(item.id);  }}
        style={{ width: "19px", height: "19px" }}
        onMouseOver={(e) => (e.currentTarget.src = `${hoverDelete}`)}
        onMouseOut={(e) => (e.currentTarget.src = `${dellete}`)}
      />
    </>
  );
}

const BottomIcons = styled.img`
  cursor: pointer;
  padding: 5px 10px 5px 25px;
`;
