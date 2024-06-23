import styled, { css } from "styled-components";

interface IPlayerWrapperProps {
  color: string;
  position_left: number;
  position_bottom: number;
}

export const PlayerWrapper = styled("div")<IPlayerWrapperProps>(
  ({ color, position_left, position_bottom }) => css`
    width: 50px;
    height: 50px;
    border-radius: 16px;
    position: absolute;
    background: ${color};
    left: ${position_left}px;
    bottom: ${position_bottom}px;
    transition: left 0.2s, bottom 0.2s ease-in-out;
  `
);
