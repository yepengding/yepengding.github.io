import React, {useEffect, useState} from "react";

const NameList = (props: { names: string }) => {

    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        const names = props.names.split(" and ").map(n => {
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
                return n === 'Ding, Y.' ? (
                    <u key={n}>{n}</u>
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
