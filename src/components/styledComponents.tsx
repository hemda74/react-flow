// src/styledComponents.ts
import styled from 'styled-components';

export const NodeContainer = styled.div`
  padding: 10px;
  background: #fff;
  text-align: center;
  
`;
export const NodeMain = styled.div`
  border: 1px solid #ddd;
  background: #fff;
  text-align: center;
  border-radius: 0.5rem;
`;
export const NodeHeader = styled.div`    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(206, 229, 253);
    padding: 0px 7.5px;
    border-bottom: 1px solid rgb(220, 220, 220);
    color:black;
    font-weight: semibold;
    font-size: 0.8rem;
`

export const InputField = styled.input`
  width: 75%;
  padding: 3px;
 
  color: black;
  background: #fff;
  border: black solid 1px ;
  border-radius: 0.5rem;
`;
export const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;
  background: #1e272e;
  border-right: 1px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
`;
export const RunButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
