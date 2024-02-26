import {Button, Form} from "react-bulma-components";
import {useTranslation} from "react-i18next";

/**
 * Locale Widget
 *
 */
const Locale = () => {

    const {i18n} = useTranslation();

    return (
        <Form.Control>
            <Button text disabled={i18n.language==="cn"} onClick={() => {
                i18n.changeLanguage("cn")
            }}>简体中文</Button>
            <Button text disabled={i18n.language==="en"} onClick={() => {
                i18n.changeLanguage("en")
            }}>English</Button>
            <Button text disabled={i18n.language==="jp"} onClick={() => {
                i18n.changeLanguage("jp")
            }}>日本語</Button>
        </Form.Control>
    )
}

export default Locale;
