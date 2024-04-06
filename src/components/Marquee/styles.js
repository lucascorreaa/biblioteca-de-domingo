import styled from "styled-components";

export const MarqueeContainer = styled.div`
    overflow: hidden;
    white-space: nowrap;
    width: 100%; 
`;

export const MarqueeContent = styled.p`
    color: white;
    font-size: 96px;
    font-weight: bold;
    display: inline-block;
    padding-left: 100%; 
    animation: marqueeAnimation 10s linear infinite; 

    @keyframes marqueeAnimation {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
`;