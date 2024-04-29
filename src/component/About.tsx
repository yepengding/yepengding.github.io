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
                    <Trans i18nKey={'about_news'}><span className="tag is-info"></span></Trans>
                </p>
                {/*<p>*/}
                {/*    <Trans i18nKey={'about_general'}/>*/}
                {/*</p>*/}
                <p>
                    <Trans i18nKey={'about_bio'}><span className="tag is-info is-light"></span></Trans>
                </p>
                <p>
                    <Trans i18nKey={'about_hobby'}><span className="tag is-info is-light"></span></Trans>
                </p>
                <p>
                <span className="tag is-info is-light"><Trans i18nKey={'websites'}/></span>&nbsp;
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
                    <strong>[<a href="https://researchmap.jp/ypding" target="_blank"
                                rel="noreferrer">researchmap</a>]</strong>
                </p>

                <strong><a href="https://github.com/yepengding/yepengding.github.io/tree/dev" target="_blank"
                           rel="noreferrer">This website</a></strong> is developed for reusable purposes.
            </Content>

        </Box>
    )
};

export default About;
