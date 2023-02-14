import styled from "styled-components";

export const SvgContainer = styled.svg`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  //   padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
