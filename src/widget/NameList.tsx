import React, {useEffect, useState} from "react";

const NameList = (props: { names: string[] }) => {

    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        const names = props.names.map(n => {
            const ns = n.split(", ")
            if (ns.length === 1) {
                return ns[0]
            }
            return `${ns[0]}, ${ns[1].charAt(0)}.`
        })
        setNames(names)
    }, [props.names])

    return (
        <span>
            {names.map<React.ReactNode>(n => {
                return n.startsWith("*") ? (
                    <u key={n}>{n.substr(1)}</u>
                ) : (
                    n
                )
            }).reduce((acc, e) => {
                return acc == null ? [e] : [acc, ", ", e]
            }, null)}
        </span>
    )
}


export default NameList;
