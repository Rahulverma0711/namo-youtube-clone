import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utilities/appSlice";

const WatchPage = () => {
 const dispatch=useDispatch();
 useEffect(()=>{
    dispatch(closeMenu());
 })
  return (
    <div>WatchPage</div>
  )
}
export default WatchPage