import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {ServiceModel} from "../model/Models";

/**
 * Service List
 */
const Service = () => {

        const {t} = useTranslation();
        const [service, setService] = useState<any>({
            editor: [],
            pc: []
        })

        useEffect(() => {
            fetch('data/service.json')
                .then(res => res.json())
                .then((data: ServiceModel) => {
                    const service = {
                        editor: data.editor
                            .map(d => (
                                <li key={d.name}>
                                    <a href={d.link} target="_blank" rel="noreferrer">{d.name}</a>&nbsp;
                                </li>
                            )),
                        pc: data.pc
                            .map(d => (
                                <li key={d.name}>
                                    <a href={d.link} target="_blank" rel="noreferrer">{d.name}</a>&nbsp;
                                </li>
                            )),
                    }
                    setService(service)
                })
        }, [setService])

        return (
            <Box id="service">
                <Heading size={5}>
                    {t("service")}
                </Heading>
                <Content>
                    <ul>
                        <strong>{t("service_editor")}</strong>
                        {service.editor}
                    </ul>
                    <ul>
                        <strong>{t("service_pc")}</strong>
                        {service.pc}
                    </ul>
                </Content>
            </Box>
        )
    }
;

export default Service;
