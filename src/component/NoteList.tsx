import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";
import NameList from "../widget/NameList";
import {useTranslation} from "react-i18next";
import {NoteModel} from "../model/Models";

/**
 * Note List
 */
const NoteList = () => {

    const {t} = useTranslation();

    const [notes, setNotes] = useState<any>([])

    useEffect(() => {
        fetch('data/notes.json')
            .then(res => res.json())
            .then((data: NoteModel[]) => {
                const notes = data.map(d => {
                    return (
                        <li key={d.title}>
                            <strong>{d.title}</strong> ({d.status})
                            by <NameList names={d.author}/>.
                            <br/>
                            <LinkList links={d.links}/>
                        </li>
                    )
                })
                setNotes(notes)
            })
    }, [setNotes])

    return (
        <Box id="note">
            <Heading size={5}>
                {t("note")}
            </Heading>
            <Content>
                <ul>
                    {notes}
                </ul>
            </Content>

        </Box>
    )
};

export default NoteList;