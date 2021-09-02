import Sidebar from './components/Sidebar';
import Routes from './routes';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enFile from '../src/translation/en.json';
import viFile from '../src/translation/vi.json';
import { connect } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const App = props => {
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: enFile },
                vi: { translation: viFile }
            },
            lng: props.language,
            fallbackLng: "en",

            interpolation: {
                escapeValue: false
            }
        });
    return (
        <BrowserRouter>
            <div className="app" toggledarkmode={props.toggleDarkMode ? 'true' : 'false'}>
                <div className="layout-main" togglesidebar={props.toggleSidebar ? 'true' : 'false'}>
                    <Routes />
                </div>
            </div>
        </BrowserRouter>
    );
}

const getStateFromStore = state => {
    return {
        language: state.language,
        toggleSidebar: state.toggleSidebar,
        toggleDarkMode: state.toggleDarkMode
    }
}

export default connect(getStateFromStore, null)(App);