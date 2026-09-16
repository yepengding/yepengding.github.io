import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";
import {fetchJSON} from "../util/fetchData";

/**
 * Current Work List
 */
const CurrentWork = () => {

    const {t} = useTranslation();

    const [currentWorks, setCurrentWorks] = useState<any>([])

    useEffect(() => {
        fetchJSON<any[]>('data/current_work.json')
            .then((data: any[]) => {
                const currentWorks = data.map(d => {
                    return (
                        <li key={d.title}>
                            <strong>{d.title}</strong>
                            <br/>
                            <LinkList links={d.links}/>
                        </li>
                    )
                })
                setCurrentWorks(currentWorks)
            })
            .catch(console.error)
    }, [setCurrentWorks])

    return (
        <Box>
            <Heading renderAs="h2" size={5}>
                {t("current_work")}
            </Heading>
            <Content>
                <ul>
                    {currentWorks}
                </ul>
            </Content>

        </Box>
    )
};

export default CurrentWork;
