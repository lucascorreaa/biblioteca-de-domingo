import { LandContainer } from "./styles"
import { Header, Marquee } from '../../components/'

export function LandPage() {
    return (
        <LandContainer>
            <Header />
            <Marquee text="DESIGN 🎨,  ENGENHARIA 🪚, METODOLOGIA-ÁGIL 📚,  HARD-SKILLS 🤸🏿‍♂️,  " />
        </LandContainer>
    )
}