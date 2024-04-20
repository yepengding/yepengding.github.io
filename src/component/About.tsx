import {Box, Content, Heading} from 'react-bulma-components';
import {Trans, useTranslation} from "react-i18next";

/**
 * My Information
 */
const About = () => {

    const {t} = useTranslation();

    return (
        <Box id="about">
            <Heading size={5}>
                {t('about')}
            </Heading>
            <Content>
                <p>
                    <span className="tag is-info">News</span> <Trans i18nKey={'about_news'}/>
                </p>
                <p>
                    <Trans i18nKey={'about_academia'}/>
                </p>
                <p>
                    <Trans i18nKey={'about_industry'}/>
                </p>
                <p>
                    <Trans i18nKey={'about_hobby'}/>
                </p>
                <p>
                    <Trans i18nKey={'websites'}/>
                    <strong>[<a href="https://github.com/yepengding" target="_blank"
                                rel="noreferrer">GitHub</a>]</strong>
                    <strong>[<a href="https://www.linkedin.com/in/yepengding" target="_blank"
                                rel="noreferrer">LinkedIn</a>]</strong>
                    <strong>[<a href="https://www.researchgate.net/profile/Yepeng_Ding" target="_blank"
                                rel="noreferrer">Research
                        Gate</a>]</strong>
                    <strong>[<a href="https://scholar.google.com/citations?user=QNrHl5EAAAAJ" target="_blank"
                                rel="noreferrer">Google
                        Scholar</a>]</strong>
                </p>

                <strong><a href="https://github.com/yepengding/yepengding.github.io/tree/dev" target="_blank"
                           rel="noreferrer">This website</a></strong> is developed for reusable purposes.
            </Content>

        </Box>
    )
};

export default About;
