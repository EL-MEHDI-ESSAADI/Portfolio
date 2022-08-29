import styled from "styled-components";

const BlurredCircle = styled.div`
   position: absolute;
   right: ${({ right }) => right};
   left: ${({ left }) => left};
   top: ${({ top }) => top};
   bottom: ${({ bottom }) => bottom};
   z-index: -1;
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: var(--cl-primary-100);
   filter: blur(50px);
   display: ${({ hideInMobile }) => hideInMobile && "none"};

   @media (min-width: 576px) {
      display: block;
      width: 100px;
      height: 100px;
      filter: blur(80px);
   }
`;

export default BlurredCircle;
