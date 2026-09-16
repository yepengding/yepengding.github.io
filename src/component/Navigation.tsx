import {Navbar} from 'react-bulma-components';
import {useState} from "react";
import {useTranslation} from "react-i18next";

/**
 * Navigation Bar
 */
const Navigation = () => {

    const {t} = useTranslation();
    const [isActive, setIsActive] = useState(false)

    return (
        <Navbar active={isActive}>
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    {/* 192px asset scaled to Bulma's 1.75rem navbar cap; the 512px one is 4x the bytes. */}
                    <img
                        src={process.env.PUBLIC_URL + '/logo192.png'}
                        alt="Yepeng Ding"
                        width="28"
                        height="28"
                    />
                </Navbar.Item>
                {/* Rendered as a real button: the default div[role=button] ignores Enter/Space. */}
                <Navbar.Burger
                    renderAs="button"
                    type="button"
                    aria-label={t('menu')}
                    aria-expanded={isActive}
                    aria-controls="navbar-menu"
                    onClick={() => setIsActive(!isActive)}/>
            </Navbar.Brand>
            <Navbar.Menu id="navbar-menu">
                <Navbar.Container>
                    <Navbar.Item hoverable>
                        <Navbar.Link>{t('publication')}</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#conference">{t('conference')}</Navbar.Item>
                            <Navbar.Item href="#journal">{t('journal')}</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item href="#talk">{t('talk')}</Navbar.Item>
                    <Navbar.Item href="#education">{t('education')}</Navbar.Item>
                    <Navbar.Item href="#about">{t('about')}</Navbar.Item>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.Item href="#contact">{t('contact')}</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default Navigation;
