import React, {useEffect, useState} from "react";

/**
 * Name List Widget
 *
 * @param props containing names as a string
 */
const NameList = (props: { names: string }) => {

    // Identify possible my names for special style application
    const myNames = ["Yepeng Ding", "Ding, Y.", "丁 曄澎"]

    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        const names = props.names.split(" and ").map(n => {
            const ns = n.split(", ")
            if (ns.length === 1) {
                // If name is not splittable by ', ', then return name
                return ns[0]
            }
            return `${ns[0]}, ${ns[1].charAt(0)}.`
        })
        setNames(names)
    }, [props.names])

    return (
        <span>
            {names.map<React.ReactNode>(n => {
                return myNames.includes(n) ? (
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
