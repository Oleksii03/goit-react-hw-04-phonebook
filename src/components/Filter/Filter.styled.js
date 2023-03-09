import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;

  width: 450px;
  padding: 20px;

  border: 3px solid #006400;
  border-radius: 5px;

  font-size: 30px;
  font-weight: 600;
  background-color: #00FFFF;

  input {
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;