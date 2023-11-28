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
        marginTop: '10px',
        marginBottom: '10px'
    } as CSSProperties,

    text: {
        fontSize: '2.5rem',
        fontWeight: '800',
        background: "linear-gradient(to right, #66B5FE, #B36BE2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    } as CSSProperties
}