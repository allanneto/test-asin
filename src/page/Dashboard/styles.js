import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #303943;

  margin: 8px;
`;

export const Page = styled.span.attrs(props => ({
  selected: props.selected,
}))`
  ${props =>
    props.selected &&
    css`
      font-weight: bold;
      color: #000;
      border-bottom: 2px solid #000;
    `}
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 5px;
  cursor: pointer;
`;

export const Parameters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Limit = styled.span.attrs(props => ({
  selected: props.selected,
}))`
  ${props =>
    props.selected &&
    css`
      font-weight: bold;
      color: #000;
      border-bottom: 2px solid #000;
    `}
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 5px;
  cursor: pointer;
`;

export const ParameterBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }

  svg {
    cursor: pointer;
  }
`;

export const ParameterName = styled.span`
  font-size: 1.2rem;
  margin: 0 10px;
`;
