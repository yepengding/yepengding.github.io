import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

/**
 * Patent List
 */
const PatentList = () => {

    const {t} = useTranslation();

    return (
        <Box id="patent">
            <Heading size={5}>
                {t("patent")}
            </Heading>
            <Content>
                <ul>
                    <li>
                        <strong>分散型データアグリゲーション方法および分散型データアグリゲーションフレームワーク</strong>, 2023
                    </li>
                    <li>
                        <strong>一种5G无线信息中心网络资源租赁的优化方法</strong>, CN107426774A, 2017
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default PatentList;
