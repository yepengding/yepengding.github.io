import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import NameList from "../widget/NameList";
import LinkList from "../widget/LinkList";
import {useTranslation} from "react-i18next";

const PublicationList = () => {

    const {t} = useTranslation();

    const [conferencePublications, setConferencePublications] = useState<any>([])

    useEffect(() => {
        fetch('data/conference_publications.json')
            .then(res => res.json())
            .then((data: any[]) => {
                const conferencePublications = data.map(d => {
                    return (
                        <li key={d.title}>
                            <NameList names={d.author}/>&nbsp;
                            ({d.date}). <strong>{d.title}</strong>. In {d.conference} (pp. {d.pages}). {d.organization}.
                            <br/>
                            <LinkList links={d.links}/>
                        </li>
                    )
                })
                setConferencePublications(conferencePublications)
            })


    }, [setConferencePublications])

    return (
        <Box>
            <Heading size={5} id="publication">
                {t("publication")}
            </Heading>
            <Content>
                <ul>
                    {conferencePublications}
                </ul>
            </Content>

        </Box>
    )
};

export default PublicationList;
