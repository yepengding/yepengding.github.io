import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";

const PastWork = () => {

    const {t} = useTranslation();

    return (
        <Box id="past">
            <Heading size={5}>
                {t("past_work")}
            </Heading>
            <Content>
                <ul>
                    <li>
                        A Variant Caller based on Deep Convolutional Neural Networks, 2018-2019
                    </li>
                    <li>
                        Hybrid Indoor Real-Time Locating system Based on Smartphone, Best Dissertation Award,
                        2017-2018
                    </li>
                    <li>
                        An Optimization Method for Network Resource Leasing in 5G Wireless Information Center,
                        Patent: CN201710367449.5, 2016-2017
                    </li>
                    <li>
                        A Real-Time Collaborative Online Mind Map Maker, Copyright: No. 2676628, 2016-2017
                    </li>
                    <li>
                        Design of Distributed Database and Subscriber Authorization System for Breast Cancer Special
                        Research, supported by No. 2016YFC0901300, 2016-2017
                    </li>
                    <li>
                        Distributed Storage and Visualization of Human Physical Activity Data, Copyright: 1774900,
                        2016
                    </li>
                    <li>
                        Tongcai China: An Automated Generation of Knowledge Graph and Knowledge Management System
                        for Expert Social Networks, Copyright: 1774897, 2015-2016
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default PastWork;
