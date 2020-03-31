/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/

export const TeamCard = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  align-items: center;
`;
export const TeamImg = styled.img.attrs(props => ({
  src: props.imgPath
}))`
  width: 200px;
  border-radius: 50%;
`;
export const Div = styled.div`
  margin: auto;
  margin-top: 0;
`;
export const Title = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  p {
    text-align: center;
    font-size: 30px;
  }
`;
export const InImg = styled.img.attrs(props => ({
  src: props.imgPath
}))`
  margin-top: -10px;
  width: 40px;
`;
export const Name = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

export const About = styled.p`
  margin-top: 10px;
  text-align: center;
`;
