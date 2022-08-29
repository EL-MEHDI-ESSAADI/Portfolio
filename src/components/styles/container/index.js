import styled from "styled-components";

const Container = styled.div`
   width: min(100% - clamp(3rem, 5vw + 1.25rem, 4.375rem), 1050px);
   /* width: min(100% - 3rem, 1050px); */
   margin: auto;
`;
export default Container;
