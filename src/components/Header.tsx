import {CSSProperties} from "react";

export function Header() {
    return (
        <div style={styles.root}>
            <span style={styles.text}>Room Finder</span>
        </div>
    )
}

const styles = {
    root: {
        width: '100%',
        textAlign: 'center',
    } as CSSProperties,

    text: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        background: "linear-gradient(to right, #66B5FE, #B36BE2)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
    } as CSSProperties
}