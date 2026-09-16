import {Button} from "react-bulma-components";
import {Entry} from "bibtex-js-parser";
import {useTranslation} from "react-i18next";

/**
 * Publication Link List Widget
 *
 * @param props containing entry, links, and openCiteModal
 * @constructor
 */
const PublicationLinkList = (props: { entry: Entry, links: any, openCiteModal: (e: Entry) => void }) => {

    const {t} = useTranslation();

    // Derived from props, so compute on render rather than via an effect keyed
    // on the props object, which allocates a fresh identity every render.
    const links: Field[] = [];
    if (props.entry.doi) {
        links.push({key: 'DOI', value: `https://doi.org/${props.entry.doi}`});
    }

    for (const k in props.links[props.entry.id]) {
        links.push({key: k, value: props.links[props.entry.id][k]});
    }

    return (
        <Button.Group align="right">
            {links.map(link => (
                <Button key={link.key} renderAs="a" href={link.value} target="_blank" rel="noreferrer"
                        color={"ghost"}>{link.key}</Button>
            ))}
            {/* A real button: an <a> without href is neither focusable nor keyboard-operable. */}
            <Button color={"light"}
                    onClick={() => props.openCiteModal(props.entry)}>{t("cite")}</Button>
        </Button.Group>
    )
}

interface Field {
    key: string,
    value: string
}

export default PublicationLinkList;
