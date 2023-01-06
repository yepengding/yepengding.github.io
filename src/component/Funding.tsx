import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

/**
 * Funding Information
 */
const Funding = () => {

    const {t} = useTranslation();

    return (
        <Box id="funding">
            <Heading size={5}>
                {t("funding")}
            </Heading>
            <Content>
                <ul>
                    <li>
                        <strong>{t("funding_dc1")}</strong>, DC1, JSPS
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default Funding;
