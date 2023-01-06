import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

/**
 * Education Information
 */
const Education = () => {

    const {t} = useTranslation();

    return (
        <Box id="education">
            <Heading size={5}>
                {t("education")}
            </Heading>
            <Content>
                <ul>
                    <li>
                        <strong>{t("edu_5_degree")}</strong>{t("edu_5_major")}, <strong>{t("edu_5_institute")}</strong>, {t("edu_5_year")}
                    </li>
                    <li>
                        <strong>{t("edu_4_degree")}</strong>{t("edu_4_major")}, <strong>{t("edu_4_institute")}</strong>, {t("edu_4_year")}
                    </li>
                    <li>
                        <strong>{t("edu_3_degree")}</strong>{t("edu_3_major")}, <strong>{t("edu_3_institute")}</strong>, {t("edu_3_year")}
                    </li>
                    <li>
                        <strong>{t("edu_2_degree")}</strong>{t("edu_2_major")}, <strong>{t("edu_2_institute")}</strong>, {t("edu_2_year")}
                    </li>
                    <li>
                        <strong>{t("edu_1_degree")}</strong>{t("edu_1_major")}, <strong>{t("edu_1_institute")}</strong>, {t("edu_1_year")}
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default Education;
