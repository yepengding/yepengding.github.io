import {Content, Footer as BulmaFooter} from 'react-bulma-components';
import {useState} from "react";
import {Trans, useTranslation} from "react-i18next";

/**
 * Footer
 */
const Footer = () => {

    const {t} = useTranslation();

    const encodedEmail = [121, 101, 112, 101, 110, 103, 100, 105, 110, 103, 64, 103, 46, 101, 99, 99, 46, 117, 45, 116, 111, 107, 121, 111, 46, 97, 99, 46, 106, 112];

    const [email, setEmail] = useState("Loading");
    const [emailDisplay, setEmailDisplay] = useState(false);

    const showEmail = () => {
        setEmail(String.fromCharCode(...encodedEmail));
        setEmailDisplay(true);
    }

    return (
        <BulmaFooter id="contact">
            <Content style={{textAlign: 'center'}}>
                <p id="email">
                    {t("email")}: <span onMouseEnter={showEmail} onClick={showEmail}
                                 style={{display: emailDisplay ? 'none' : 'inline'}}>{t("email_tip")}</span>
                    <a href={`mailto:${email}`} style={{display: emailDisplay ? 'inline' : 'none'}}>{email}</a>
                </p>
                <small>
                    <Trans i18nKey="address">
                        Information Technology Center<br/>The University of Tokyo<br/>2-11-16 Yayoi, Bunkyo-ku, Tokyo, 113-8658, Japan
                    </Trans>

                </small>
            </Content>
        </BulmaFooter>
    )
};

export default Footer;
