import {Block, Heading, Hero} from 'react-bulma-components';
import {useTranslation} from 'react-i18next';
import Locale from "../widget/Locale";

const Header = () => {

    const {t} = useTranslation();

    return (
        <Hero color="light" gradient>
            <Hero.Body>
                <Block>
                    <Heading size={1} textAlign="center">
                        <ruby>{t('firstname')}
                            <rt>{t('firstname_phonetic')}</rt>
                        </ruby> &nbsp;
                        <ruby>{t('lastname')}
                            <rt>{t('lastname_phonetic')}</rt>
                        </ruby>
                    </Heading>
                </Block>

                <Heading subtitle size={4} textAlign="center">
                    {t('research_interest')}
                </Heading>
            </Hero.Body>
            <Hero.Footer>
                <Heading subtitle textAlign="center">
                    <Locale/>
                </Heading>

            </Hero.Footer>
        </Hero>
    )
};

export default Header;
