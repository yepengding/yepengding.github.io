/**
 * Link List Widget
 *
 * @param props
 * @constructor
 */
const LinkList = (props: {links: object}) => {

    return (
        <>
            {
                Object.entries(props.links).map(l => {
                        return (
                            <strong key={l[0]}>[<a href={l[1]} target="_blank" rel="noreferrer">{l[0]}</a>]</strong>
                        )
                    }
                )
            }
        </>
    )
}

export default LinkList;
