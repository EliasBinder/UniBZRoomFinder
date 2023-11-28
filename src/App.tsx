import './App.css'
import {CSSProperties} from "react";
import {Browser} from "./screens/Browser.tsx";

function App() {
  return (
    <div style={styles.root}>
        <Browser/>
    </div>
  )
}

const styles = {
    root: {
        width: '100%',
        height: '100%',
    } as CSSProperties,
}

export default App
