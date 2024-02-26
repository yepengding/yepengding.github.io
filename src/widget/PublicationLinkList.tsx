import {Button} from "react-bulma-components";
import {Entry} from "bibtex-js-parser";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

/**
 * Publication Link List Widget
 *
 * @param props containing entry, links, and openCiteModal
 * @constructor
 */
const PublicationLinkList = (props: { entry: Entry, links: any, openCiteModal: (e: Entry) => void }) => {

    const {t} = useTranslation();

    const [linkList, setLinkList] = useState<any>([]);


    useEffect(() => {
        let links: Field[] = [];
        if (props.entry.doi) {
            links.push({key: 'DOI', value: `https://doi.org/${props.entry.doi}`});
        }

        for (const k in props.links[props.entry.id]) {
            links.push({key: k, value: props.links[props.entry.id][k]});
        }

        const linkList = links.map(link => {
            return (
                <Button key={link.key} renderAs="a" href={link.value} target="_blank" rel="noreferrer" size="string"
                        color={"ghost"}>{link.key}</Button>
            )
        });

        setLinkList(linkList);
    }, [props])


    return (
        <Button.Group align="right">
            {linkList}
            <Button renderAs={"a"} color={"light"} size="string"
                    onClick={() => props.openCiteModal(props.entry)}>{t("cite")}</Button>
        </Button.Group>
    )
}

interface Field {
    key: string,
    value: string
}

export default PublicationLinkList;
