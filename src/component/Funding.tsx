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
                        <strong>{t("fund_1_name")}</strong>, {t("fund_1_institute")}
                    </li>
                    <li>
                        <strong>{t("fund_2_name")}</strong>, {t("fund_2_institute")}
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default Funding;
