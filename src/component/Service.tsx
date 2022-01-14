import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

const Service = () => {

    const {t} = useTranslation();

    const [journalService, setJournalService] = useState<any>([])
    const [conferenceService, setConferenceService] = useState<any>([])

    useEffect(() => {
        const fetchJournalService = fetch('data/journal_service.json')
            .then(res => res.json())
        const fetchConferenceService = fetch('data/conference_service.json')
            .then(res => res.json())
        Promise.all([
            fetchJournalService, fetchConferenceService
        ]).then((data: any[][]) => {
            const [jData, cData] = data
            const journalService = jData.map(d => {
                return (
                    <li key={d.name}>
                        <strong>{d.name}</strong>&nbsp;
                        {d.role}. <strong>{d.note}</strong>
                    </li>
                )
            })
            setJournalService(journalService)

            const conferenceService = cData.map(d => {
                return (
                    <li key={d.name}>
                        <strong>{d.name}</strong>&nbsp;
                        {d.role}. <strong>{d.note}</strong>
                    </li>
                )
            })
            setConferenceService(conferenceService)

        })
    }, [setJournalService, setConferenceService])

    return (
        <Box id="service">
            <Heading size={5}>
                {t("service")}
            </Heading>
            <Content>
                <ul>
                    <li><strong>Journal</strong>
                        <ul>
                            {journalService}
                        </ul>
                    </li>
                    <li><strong>Conference</strong>
                        <ul>
                            {conferenceService}
                        </ul>
                    </li>
                </ul>
            </Content>

        </Box>
    )
};

export default Service;
