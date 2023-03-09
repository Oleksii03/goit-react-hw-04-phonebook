import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;

  width: 450px;
  padding: 20px;
  margin-bottom: 30px;

  border: 3px solid #006400;
  background-color: #00FFFF;
  border-radius: 5px;

  font-size: 25px;
  font-weight: 600;

  label {
    display: flex;
    align-items: center;
    gap: 30px;

    input {
      width: 100%;
      padding: 8px;
      outline: none;
      border: none;
      border-radius: 5px;
    }
  }
`;

export const StyledBtn = styled.button`
  padding: 10px 25px;
  margin: 0 auto;
  background-color: #006400;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover, &:focus {
  outline: 2px solid #006400;
  background-color: #00FFFF;
  color: #000;
  }
`;