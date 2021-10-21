import React, {useState} from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

const FrontCardWrapper = styled.div`
  display: flex;
  background-color: red;
  border-radius: 2rem;
  width: 45rem;
  height: 90rem;
  margin: auto;
`;


const BackCardWrapper = styled.div`
  display: flex;
  background-color: green;
  border-radius: 2rem;
  width: 45rem;
  height: 90rem;
  margin: auto;
`;


export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontCardWrapper onClick={() => setIsFlipped(true)}/>
      <BackCardWrapper onClick={() => setIsFlipped(false)}/>
    </ReactCardFlip>
  );
};
