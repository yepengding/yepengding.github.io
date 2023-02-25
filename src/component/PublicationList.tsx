import {Box, Button, Content, Heading, Modal} from 'react-bulma-components';
import React, {useEffect, useState} from "react";
import NameList from "../widget/NameList";
import {useTranslation} from "react-i18next";
import {BibtexParser, Entry} from "bibtex-js-parser";
import PublicationLinkList from "../widget/PublicationLinkList";


/**
 * Publication List
 */
const PublicationList = () => {

    const {t} = useTranslation();

    const [conferencePublications, setConferencePublications] = useState<any>([]);
    const [journalPublications, setJournalPublications] = useState<any>([]);
    const [clickedPublication, setClickedPublication] = useState<Entry>();
    const [showModal, setShowModal] = useState<boolean>(false);

    const openCiteModal = (e: Entry) => {
        setClickedPublication(e)
        setShowModal(true);
    }

    useEffect(() => {
        // Identify journal type in BibTeX
        const journalTypes = ["article"]
        // Identify conference type in BibTeX
        const conferenceTypes = ["inproceedings", "incollection"];

        const fetchPublications = fetch('data/publications.bib')
            .then(res => res.text())
        const fetchPublicationLinks = fetch('data/publication_links.json')
            .then(res => res.json())

        Promise.all([
            fetchPublications, fetchPublicationLinks
        ]).then((data: [string, any]) => {
            const [pub_bib, pub_links] = data
            // Parse BibTeX text to JSON
            const bibJSON: [Entry] = BibtexParser.parseToJSON(pub_bib);

            // Compute Journal Publications
            const journalPubs = bibJSON
                .filter(entry => journalTypes.includes(entry.type))
                .map(e => {
                    return (
                        <li key={e.id}>
                            <NameList names={e.author ? e.author : 'no author'}/>&nbsp;
                            ({e.year}). <strong>{e.title}</strong>. {e.journal}, {e.volume}({e.number}). {e.note ?
                            <strong>({e.note})</strong> : null}
                            <br/>
                            <PublicationLinkList entry={e} links={pub_links} openCiteModal={openCiteModal}/>
                        </li>
                    );
                });
            setJournalPublications(journalPubs);

            // Compute conference publications
            const conferencePubs = bibJSON
                .filter(entry => conferenceTypes.includes(entry.type))
                .map(e => {
                    return (
                        <li key={e.id}>
                            <NameList names={e.author ? e.author : 'no author'}/>&nbsp;
                            ({e.year}). <strong>{e.title}</strong>.
                            In {e.booktitle} (pp. {e.pages}). {e.publisher}. {e.note ?
                            <strong>({e.note})</strong> : null}
                            <br/>
                            <PublicationLinkList entry={e} links={pub_links} openCiteModal={openCiteModal}/>

                        </li>
                    )
                });
            setConferencePublications(conferencePubs);
        });

    }, [setConferencePublications, setJournalPublications])

    return (
        <>
            <Box>
                <Heading size={5} id="publication">
                    {t("publication")}
                </Heading>
                <Content>
                    <strong>[<a href="https://yepengding.github.io/data/publications.bib"
                                rel="alternate">Download BibTeX File</a>]</strong>
                </Content>


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

                <p>
                    * Powered by <a href="https://github.com/yepengding/bibtex-js-parser"
                                    target="_blank" rel="noreferrer">bibtex-js-parser</a>.
                </p>
            </Box>

            <div onClick={() => setShowModal(false)}>
                <Modal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                >
                    <Modal.Card onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}>
                        <Modal.Card.Body>
                            <Content>
                                <pre>
                                    {clickedPublication?.raw}
                                </pre>
                            </Content>
                        </Modal.Card.Body>
                        <Modal.Card.Footer justifyContent="right">
                            <Button color="dark" onClick={
                                () => navigator.clipboard.writeText(clickedPublication ? clickedPublication.raw : '')
                            }>
                                {t("copy")}
                            </Button>
                        </Modal.Card.Footer>
                    </Modal.Card>
                </Modal>
            </div>

        </>
    )
};

export default PublicationList;
