import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

const Award = () => {

    const {t} = useTranslation();

    return (
        <Box id="award">
            <Heading size={5}>
                {t("award")}
            </Heading>
            <Content>
                <ul>
                    <li>
                        <strong>{t("award_dc1")}</strong>, DC1, JSPS
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default Award;
