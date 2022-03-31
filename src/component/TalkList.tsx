import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";
import NameList from "../widget/NameList";
import {useTranslation} from "react-i18next";
import {TalkModel} from "../model/Models";

const TalkList = () => {

    const {t} = useTranslation();

    const [talks, setTalks] = useState<any>([])

    useEffect(() => {
        fetch('data/talks.json')
            .then(res => res.json())
            .then((data: TalkModel[]) => {
                const talks = data.map(d => {
                    return (
                        <li key={d.doi}>
                            <NameList names={d.presenter}/>&nbsp;
                            ({d.date}). <strong>{d.title}</strong>. {d.doi}.
                            <br/>
                            <LinkList links={d.links}/>
                        </li>
                    )
                })
                setTalks(talks)
            })
    }, [setTalks])

    return (
        <Box id="talk">
            <Heading size={5}>
                {t("talk")}
            </Heading>
            <Content>
                <ul>
                    {talks}
                </ul>
            </Content>

        </Box>
    )
};

export default TalkList;
