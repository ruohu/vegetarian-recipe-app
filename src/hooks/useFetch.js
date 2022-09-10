import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setError, setLoading } from '../redux/actions';


export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setLoading(true));
    try {
      let response = await axios.get(url);
      dispatch(setError(false));
      setData(response.data);
    } catch (err) {
      console.log("error ", err);
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
}