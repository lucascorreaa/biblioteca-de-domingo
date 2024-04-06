import { LandContainer } from "./styles"
import { Header, Marquee } from '../../components/'

export function LandPage() {
    return (
        <LandContainer>
            <Header />
            <Marquee content="DESIGN 🎨 - ENGENHARIA 🪚 - METODOLOGIA-ÁGIL 📚 - HARD-SKILLS 🤸🏿‍♂️" />
        </LandContainer>
    )
}