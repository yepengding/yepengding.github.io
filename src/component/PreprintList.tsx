import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";
import NameList from "../widget/NameList";
import {useTranslation} from "react-i18next";
import {PreprintModel} from "../model/Models";

const PreprintList = () => {

    const {t} = useTranslation();

    const [preprints, setPreprints] = useState<any>([])

    useEffect(() => {
        fetch('data/preprints.json')
            .then(res => res.json())
            .then((data: PreprintModel[]) => {
                const preprints = data.map(d => {
                    return (
                        <li key={d.doi}>
                            <NameList names={d.author}/>&nbsp;
                            ({d.date}). <strong>{d.title}</strong>. {d.doi}.
                            <br/>
                            <LinkList links={d.links}/>
                        </li>
                    )
                })
                setPreprints(preprints)
            })
    }, [setPreprints])

    return (
        <Box id="preprint">
            <Heading size={5}>
                {t("preprint")}
            </Heading>
            <Content>
                <ul>
                    {preprints}
                </ul>
            </Content>

        </Box>
    )
};

export default PreprintList;
