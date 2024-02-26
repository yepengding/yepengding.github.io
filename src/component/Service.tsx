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
            pc: [],
            reviewer: [],
            awards: []
        })

        useEffect(() => {
            fetch('data/service.json')
                .then(res => res.json())
                .then((data: ServiceModel) => {
                    const service = {
                        pc: data.pc
                            .map(d => d.name)
                            .join(", "),
                        reviewer: data.reviewer
                            .map(d => d.name)
                            .join(", "),
                        awards: data.awards.map(d => {
                            return (
                                <li key={d.name}>
                                    {d.name}, <strong>{d.note}</strong>
                                </li>
                            )
                        }),
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
                        <li><strong>{t("service_pc")}</strong>
                            <p>
                                {service.pc}
                            </p>
                        </li>
                        <li><strong>{t("service_reviewer")}</strong>
                            <p>
                                {service.reviewer}
                            </p>
                        </li>
                        <li><strong>{t("service_awards")}</strong></li>
                        <ul>
                            {service.awards}
                        </ul>
                    </ul>
                </Content>

            </Box>
        )
    }
;

export default Service;
