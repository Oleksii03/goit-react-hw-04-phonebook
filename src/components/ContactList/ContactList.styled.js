import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-bottom: 20px;

  font-size: 25px;
  font-weight: 500;

  & button {
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s linear;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: #00FFFF;
      
    &:hover, &:focus {
      background-color: #006400;
      color: #fff;
    }
  }
`;

export const StyledOl = styled.ol`
  margin: 0;

  padding: 0;

  font-size: 20px;
  font-weight: 500;
`;