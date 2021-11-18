import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

const Service = () => {

    const {t} = useTranslation();

    return (
        <Box id="service">
            <Heading size={5}>
                {t("service")}
            </Heading>
            <Content>
                <ul>
                    <li><strong>MMBD 2021</strong> External Reviewer</li>
                </ul>
            </Content>

        </Box>
    )
};

export default Service;
