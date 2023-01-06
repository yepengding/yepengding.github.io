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
                    <img
                        src={process.env.PUBLIC_URL + '/logo512.png'}
                        alt="Yepeng Ding"
                    />
                </Navbar.Item>
                <Navbar.Burger onClick={() => setIsActive(!isActive)}/>
            </Navbar.Brand>
            <Navbar.Menu>
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
