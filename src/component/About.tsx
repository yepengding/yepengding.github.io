import {Box, Content, Heading} from 'react-bulma-components';
import {Trans, useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGoogleScholar, faLinkedin, faResearchgate} from '@fortawesome/free-brands-svg-icons'

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
                    <a className="button is-text" href="https://scholar.google.com/citations?user=QNrHl5EAAAAJ"
                       target="_blank" rel="noreferrer">
                        <span className="icon">
                          <FontAwesomeIcon icon={faGoogleScholar}/>
                        </span>
                        <span>Google Scholar</span>
                    </a>

                    <a className="button is-text" href="https://github.com/yepengding"
                       target="_blank" rel="noreferrer">
                        <span className="icon">
                          <FontAwesomeIcon icon={faGithub}/>
                        </span>
                        <span>GitHub</span>
                    </a>

                    <a className="button is-text" href="https://www.linkedin.com/in/yepengding"
                       target="_blank" rel="noreferrer">
                        <span className="icon">
                          <FontAwesomeIcon icon={faLinkedin}/>
                        </span>
                        <span>LinkedIn</span>
                    </a>

                    <a className="button is-text" href="https://www.researchgate.net/profile/Yepeng_Ding"
                       target="_blank" rel="noreferrer">
                        <span className="icon">
                          <FontAwesomeIcon icon={faResearchgate}/>
                        </span>
                        <span>ResearchGate</span>
                    </a>

                    <a className="button is-text" href="https://researchmap.jp/ypding"
                       target="_blank" rel="noreferrer">
                        <span>researchmap</span>
                    </a>
                </p>

                <strong><a href="https://github.com/yepengding/yepengding.github.io/tree/dev" target="_blank"
                           rel="noreferrer">This website</a></strong> is developed for reusable purposes.
            </Content>

        </Box>
    )
};

export default About;
