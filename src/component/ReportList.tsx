import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import LinkList from "../widget/LinkList";
import NameList from "../widget/NameList";
import {useTranslation} from "react-i18next";
import {fetchJSON} from "../util/fetchData";

/**
 * Report List
 */
const ReportList = () => {

    const {t} = useTranslation();

    const [reports, setReports] = useState<any>([])

    useEffect(() => {
        fetchJSON<any[]>('data/reports.json')
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
            .catch(console.error)
    }, [setReports])

    return (
        <Box id="report">
            <Heading renderAs="h2" size={5}>
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
