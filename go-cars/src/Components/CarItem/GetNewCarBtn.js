import React from 'react';
import { Button } from './GetNewCarBtn.styled';

const GetNewCarButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Get New Car
    </Button>
  );
};

export default GetNewCarButton;
