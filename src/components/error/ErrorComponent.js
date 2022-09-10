import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const ErrorComponent = () => {
  const hasError = useSelector((state) => state.errorReducer.hasError);

  if (hasError) {
    return (
      <span className="error-message"> Sorry! Something went wrong...</span>
    )
  }
  return (<></>);
}

export default ErrorComponent;