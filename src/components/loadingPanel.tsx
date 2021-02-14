import React from 'react';
import ReactDOM from 'react-dom';

interface LoaderProps {
  showBgColor?: boolean;
}

//TODO: Implement Loader component
export const Loader: React.FC<LoaderProps> = () => {
  return <div>Loading...</div>;
};

const LoadingPanel: React.FC<{ selector?: string }> = ({ selector }) => {
  const gridContent = document && selector && document.querySelector(selector);
  return gridContent ? (
    ReactDOM.createPortal(<Loader showBgColor={true} />, gridContent)
  ) : (
    <Loader />
  );
};

export default LoadingPanel;
