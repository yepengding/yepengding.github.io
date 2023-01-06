import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";

/**
 * Current Work List
 */
const CurrentWork = () => {

    const {t} = useTranslation();

    const [currentWorks, setCurrentWorks] = useState<any>([])

    useEffect(() => {
        fetch('data/current_work.json')
            .then(res => res.json())
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
    }, [setCurrentWorks])

    return (
        <Box>
            <Heading size={5}>
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
