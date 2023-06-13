import styled from "styled-components";

const IconWrapper = styled.div`
  position: relative;
  margin: 0 1rem;
  padding: 0;
  line-height: 0;

  @media (max-width: 300px) {
    transform: scale(1);
    margin: 0 0.5rem;
    zoom: 0.9;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 0.35s ease-in-out;
  }
`;

const CountBubble = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export { IconWrapper, CountBubble };
