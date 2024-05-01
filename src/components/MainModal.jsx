import React from 'react'
import styled from 'styled-components';

function MainModal({isOpen, closeModal}) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
        <div>
            <button onClick={closeModal}>x</button>
            <Box>
            <ButtonContainer>
            <Button>관상으로 <br />나에게 맞는 동아리<br/> 찾으러 가기</Button>
            <Button>문답으로 <br />나에게 맞는 동아리 <br />찾으러 가기</Button>
            </ButtonContainer>
            </Box>
        </div>
    </div>
  );
}

const Box = styled.div`
  width: 53rem;
  height: 53rem;
  background-color: gray;
  border-radius: 2.5rem;
  right: 27.5625rem;
  top: -40.5625rem;
`;

const Button = styled.button`
  position: relative;
  width: 42.6875rem;
  height: 11.75rem;
  left: 16rem;
  top: 10rem;
  background-color: #9b8ba3;
  font-size: 2.25rem;
  font-weight: bold;
  /* padding-top : .625rem; */
`;


const ButtonContainer = styled.div`
  position: relative;
  top: 3.125rem;
  left: 3.125rem;
  margin-bottom: 20px;
`

export default MainModal