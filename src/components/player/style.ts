import styled, {css} from 'styled-components'

interface IPlayerWrapperProps{
    color: string
    positionLeft: number
    positionBottom: number
}

export const PlayerWrapper = styled("div")<IPlayerWrapperProps>(({color, positionLeft, positionBottom}) => css`
    width: 50px;
    height: 50px;
    border-radius: 16px;
    position: absolute;
    background: ${color};
    left: ${positionLeft};
    bottom: ${positionBottom};
`
)
