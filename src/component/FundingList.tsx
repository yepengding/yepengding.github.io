import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {FundingItemModel} from "../model/Models";

/**
 * Funding List
 */
const FundingList = () => {

        const {t} = useTranslation();
        const [funding, setFunding] = useState<any>([])

        useEffect(() => {
            fetch('data/funding.json')
                .then(res => res.json())
                .then((data: FundingItemModel[]) => {
                    const funding = data.map(d => {
                        return (
                            <li key={d.id}>
                                <strong>{t(d.id)}</strong> ({d.funder})
                            </li>
                        )
                    })
                    setFunding(funding)
                })
        }, [setFunding, t])

        return (
            <Box id="funding">
                <Heading size={5}>
                    {t("funding")}
                </Heading>
                <Content>
                    <ul>
                        {funding}
                    </ul>
                </Content>
            </Box>
        )
    }
;

export default FundingList;
