import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {FundingItemModel} from "../model/Models";
import {fetchJSON} from "../util/fetchData";

/**
 * Funding List
 */
const FundingList = () => {

        const {t} = useTranslation();
        // Keep the raw data in state and translate on render, so switching
        // language re-renders without re-fetching.
        const [funding, setFunding] = useState<FundingItemModel[]>([])

        useEffect(() => {
            fetchJSON<FundingItemModel[]>('data/funding.json')
                .then(setFunding)
                .catch(console.error)
        }, [setFunding])

        return (
            <Box id="funding">
                <Heading renderAs="h2" size={5}>
                    {t("funding")}
                </Heading>
                <Content>
                    <ul>
                        {funding.map(d => (
                            <li key={d.id}>
                                <strong>{t(d.id)}</strong> ({d.funder})
                            </li>
                        ))}
                    </ul>
                </Content>
            </Box>
        )
    }
;

export default FundingList;
