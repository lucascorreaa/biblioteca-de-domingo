import { MarqueeContainer, MarqueeContent } from './styles'

export function Marquee(props) {
    return (
        <MarqueeContainer>
            <MarqueeContent>{props.text}{props.text}</MarqueeContent>
        </MarqueeContainer>
    )
}