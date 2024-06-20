import { API_OPTION } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import {addTop100moviess} from "../Utils/movieSlice";
import { useEffect } from 'react';

const useTop100Movies= () =>{
    const dispatch=useDispatch();
  const url='https://netflix-data.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25';

  const top100Movies=async () => {
    const data=await fetch(url,API_OPTION);
    const json= await data.json();
    console.log(json);
    dispatch(addTop100moviess(json.results));
  };

  useEffect(()=>{
    top100Movies();
  }, []);
};

export default useTop100Movies;