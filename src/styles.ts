import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.div`
  background-color: #7159c1;
  margin: 6px;
  padding: 40px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: sans-serif;
  color: #fff;

  span:first-child {
    font-weight: bold;
    font-size: 1.3rem;
  }

  small {
    color: #31235e;
    font-size: 1rem;
  }
`;

export const DateView = styled.span`
  color: #31235e;
  font-size: 0.8rem;
  text-decoration: underline;
`;
