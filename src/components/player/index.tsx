import * as S from './style'

interface IPlayerProps{
    id: number,
    color: string
}

const Player = ({id, color}: IPlayerProps) => {         
    return(
        <S.PlayerWrapper color={color} positionLeft={0} positionBottom={0}>
            <img src="" alt={color} />
        </S.PlayerWrapper>
    )
}



export { Player }