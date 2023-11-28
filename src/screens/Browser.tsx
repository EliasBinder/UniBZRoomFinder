import {CSSProperties} from "react";
import {Header} from "../components/Header.tsx";

export function Browser() {
    return (
        <div style={styles.root}>
            <Header/>
        </div>
    )
}

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    } as CSSProperties,
}