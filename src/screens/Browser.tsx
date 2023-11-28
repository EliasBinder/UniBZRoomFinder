import {CSSProperties} from "react";
import {Header} from "../components/Header.tsx";

export function Browser() {
    return (
        <div style={styles.root}>
            <Header/>
            <div style={{height: '100%'}}>Test</div>
        </div>
    )
}

const styles = {
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    } as CSSProperties,
}