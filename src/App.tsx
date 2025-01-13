import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { VideoBox } from "./components/VideoBox";
import { GlobalContext, GlobalContextProvider } from "./contexts/ContextGlobal";
import { Subtitle } from "./components/Subtitle";

function App() {
    return (
        <GlobalContextProvider>
            <Layout
                componentOne={<VideoBox url="src\assets\video.mp4"/>}
                componentTwo={<Subtitle/>}
            ></Layout>
        </GlobalContextProvider>
    );
}
export default App;
