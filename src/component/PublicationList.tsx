import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import NameList from "../widget/NameList";
import LinkList from "../widget/LinkList";
import {useTranslation} from "react-i18next";
import {BibtexParser, Entry} from "bibtex-js-parser";

const PublicationList = () => {

    const {t} = useTranslation();

    const [conferencePublications, setConferencePublications] = useState<any>([])
    const [journalPublications, setJournalPublications] = useState<any>([])

    useEffect(() => {
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
                .filter(entry => entry.type === "article")
                .map(e => {
                    const links: { [k: string]: string } = {};
                    if (e.doi) {
                        links['DOI'] = `https://doi.org/${e.doi}`;
                    }
                    for (const l in pub_links[e.id]) {
                        links[l] = pub_links[e.id][l]
                    }

                    return (
                        <li key={e.id}>
                            <NameList names={e.author ? e.author : 'no author'}/>&nbsp;
                            ({e.year}). <strong>{e.title}</strong>.
                            <br/>
                            <LinkList links={links}/>
                        </li>
                    );
                });
            setJournalPublications(journalPubs);

            // Compute conference publications
            const conferencePubs = bibJSON
                .filter(entry => entry.type === "inproceedings")
                .map(e => {
                    const links: { [k: string]: string } = {};
                    if (e.doi) {
                        links['DOI'] = `https://doi.org/${e.doi}`;
                    }
                    for (const l in pub_links[e.id]) {
                        links[l] = pub_links[e.id][l]
                    }
                    return (
                        <li key={e.id}>
                            <NameList names={e.author ? e.author : 'no author'}/>&nbsp;
                            ({e.year}). <strong>{e.title}</strong>.
                            In {e.booktitle} (pp. {e.pages}). {e.publisher}.
                            <br/>
                            <LinkList links={links}/>
                        </li>
                    )
                });
            setConferencePublications(conferencePubs);
        });

    }, [setConferencePublications, setJournalPublications])

    return (
        <Box>
            <Heading size={5} id="publication">
                {t("publication")}
            </Heading>
            <Content>
                <strong>[<a href="https://yepengding.github.io/data/publications.bib" target="_blank"
                            rel="noreferrer">Download BibTeX</a>]</strong>
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

        </Box>
    )
};

export default PublicationList;
