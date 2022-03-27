import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import NameList from "../widget/NameList";
import LinkList from "../widget/LinkList";
import {useTranslation} from "react-i18next";
import {Journal, Conference} from "../model/PublicationModels"

const PublicationList = () => {

    const {t} = useTranslation();

    const [conferencePublications, setConferencePublications] = useState<any>([])
    const [journalPublications, setJournalPublications] = useState<any>([])

    useEffect(() => {
        const fetchJournalPublications = fetch('data/journal_publications.json')
            .then(res => res.json())
        const fetchConferencePublications = fetch('data/conference_publications.json')
            .then(res => res.json())

        Promise.all([
            fetchJournalPublications, fetchConferencePublications
        ]).then((data: [Journal[], Conference[]]) => {
            const [jData, cData] = data
            const journalPublications = jData.map(d => {
                return (
                    <li key={d.title}>
                        <NameList names={d.author}/>&nbsp;
                        ({d.year}). <strong>{d.title}</strong>.
                        <br/>
                        <LinkList links={d.links}/>
                    </li>
                )
            })
            setJournalPublications(journalPublications)

            const conferencePublications = cData.map(d => {
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
    }, [setConferencePublications, setJournalPublications])

    return (
        <Box>
            <Heading size={5} id="publication">
                {t("publication")}
            </Heading>

            <Heading size={5} id="conference">
                {t("conference")}
            </Heading>
            <Content>
                <ul>
                    {conferencePublications}
                </ul>
            </Content>

            <Heading size={5} id="journal">
                {t("journal")}
            </Heading>
            <Content>
                <ul>
                    {journalPublications}
                </ul>
            </Content>

        </Box>
    )
};

export default PublicationList;
