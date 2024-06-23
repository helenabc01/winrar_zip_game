import * as S from "./style";

interface IPlayerProps {
  id: number;
  color: string;
  positionLeft: number;
  positionBottom: number;
  isJumping: boolean;
  jumpHeight: number;
}

const Player = ({
  id,
  color,
  positionLeft,
  positionBottom,
  isJumping,
  jumpHeight,
}: IPlayerProps) => {
  return (
    <S.PlayerWrapper
      color={color}
      position_left={positionLeft}
      position_bottom={positionBottom + jumpHeight}
    >
      <img src="" alt={color} />
    </S.PlayerWrapper>
  );
};

export { Player };
