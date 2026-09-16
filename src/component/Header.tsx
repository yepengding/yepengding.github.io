import {Block, Heading, Hero} from 'react-bulma-components';
import {useTranslation} from 'react-i18next';
import Locale from "../widget/Locale";

/**
 * Header
 */
const Header = () => {

    const {t} = useTranslation();

    return (
        <Hero color="light" gradient>
            <Hero.Body>
                <Block>
                    {/* The only <h1> on the page; every other heading is an <h2>/<h3>. */}
                    <Heading renderAs="h1" size={1} textAlign="center">
                        <ruby>{t('firstname')}
                            <rt>{t('firstname_phonetic')}</rt>
                        </ruby> &nbsp;
                        <ruby>{t('lastname')}
                            <rt>{t('lastname_phonetic')}</rt>
                        </ruby>
                    </Heading>
                </Block>

                <Heading renderAs="p" subtitle size={4} textAlign="center">
                    {t('research_interest')}
                </Heading>
            </Hero.Body>
            <Hero.Footer>
                {/* Rendered as a div: Locale contains a block-level control. */}
                <Heading renderAs="div" subtitle textAlign="center">
                    <Locale/>
                </Heading>

            </Hero.Footer>
        </Hero>
    )
};

export default Header;
