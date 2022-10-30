import "./styles.scss";
import {Container} from "../Container";

export const Header = () => {
    return (
        <header className={'header'}>
            <Container>
                <a href={'/'} className={'logo header-logo'}>WelbeX</a>
            </Container>
        </header>
    )
}