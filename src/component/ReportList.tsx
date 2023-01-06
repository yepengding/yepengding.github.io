import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";
import NameList from "../widget/NameList";
import {useTranslation} from "react-i18next";

/**
 * Report List
 */
const ReportList = () => {

    const {t} = useTranslation();

    const [reports, setReports] = useState<any>([])

    useEffect(() => {
        fetch('data/reports.json')
            .then(res => res.json())
            .then((data: any[]) => {
                const reports = data.map(d => {
                    return (
                        <li key={d.title}>
                            <strong>{d.title}</strong> ({d.date})
                            by <NameList names={d.author}/>.
                            <br/>
                            <LinkList links={d.links}/>
                        </li>
                    )
                })
                setReports(reports)
            })
    }, [setReports])

    return (
        <Box id="report">
            <Heading size={5}>
                {t("report")}
            </Heading>
            <Content>
                <ul>
                    {reports}
                </ul>
            </Content>

        </Box>
    )
};

export default ReportList;
