import {Box, Content, Heading} from 'react-bulma-components';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {ServiceItemModel, ServiceModel} from "../model/Models";
import {fetchJSON} from "../util/fetchData";

/**
 * Service List
 */
const Service = () => {

        const {t} = useTranslation();
        const [service, setService] = useState<ServiceModel>({
            editor: [],
            pc: []
        })

        useEffect(() => {
            fetchJSON<ServiceModel>('data/service.json')
                .then(setService)
                .catch(console.error)
        }, [setService])

        return (
            <Box id="service">
                <Heading renderAs="h2" size={5}>
                    {t("service")}
                </Heading>
                <Content>
                    <p><strong>{t("service_editor")}</strong></p>
                    <ul>
                        {service.editor.map((d: ServiceItemModel) => (
                            <li key={d.name}>
                                <a href={d.link} target="_blank" rel="noreferrer">{d.name}</a>
                            </li>
                        ))}
                    </ul>
                    <p><strong>{t("service_pc")}</strong></p>
                    <p>{service.pc.map((d: ServiceItemModel) => d.name).join(", ")}</p>
                </Content>
            </Box>
        )
    }
;

export default Service;
