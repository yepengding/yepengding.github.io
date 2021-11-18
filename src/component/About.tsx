import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

const About = () => {

    const {t} = useTranslation();

    return (
        <Box id="about">
            <Heading size={5}>
                {t('about')}
            </Heading>
            <Content>
                <p>
                    I have a great interest in <strong>decentralized technologies</strong>. Particularly, I am
                    focusing on the security aspect of these promising technologies that is <strong>the security
                    behind the security</strong>. Besides, I am constructing the foundational theory of a new
                    programming paradigm named <strong>transition-oriented programming</strong> to instruct
                    programmers to think in a formal way while developing complex systems such as decentralized
                    systems.
                </p>
                <p>
                    Meanwhile, I am a system architect and a software engineer. I have supervised dozens of
                    development projects for startups and institutes since 2015. I am still exploring the
                    methodology of developing <strong>provably correct and verifiable software</strong>.
                </p>
                <p>
                    Hobbies: programming, travel, speculation
                </p>
                <p>
                    Websites:
                    <strong>[<a href="https://www.linkedin.com/in/yepengding" target="_blank"  rel="noreferrer">LinkedIn</a>]</strong>
                    <strong>[<a href="https://www.researchgate.net/profile/Yepeng_Ding" target="_blank"  rel="noreferrer">Research
                        Gate</a>]</strong>
                    <strong>[<a href="https://scholar.google.com/citations?user=idwQ-d4AAAAJ" target="_blank"  rel="noreferrer">Google
                        Scholar</a>]</strong>
                </p>
            </Content>

        </Box>
    )
};

export default About;
