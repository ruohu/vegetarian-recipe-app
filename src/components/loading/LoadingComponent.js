import React from 'react';
import './LoadingComponent.css';
import { useSelector } from 'react-redux';


const LoadingComponent = () => {
  const loading = useSelector((state) => state.loading.isLoading);

  if (loading) {
    return <div className="loading-text">Loading...</div>
  }

  return (
    <></>
  );

}

export default LoadingComponent;