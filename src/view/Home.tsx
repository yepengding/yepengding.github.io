import Header from "../component/Header";
import CurrentWork from "../component/CurrentWork";
import Footer from "../component/Footer";
import {Container, Section} from 'react-bulma-components';
import PublicationList from "../component/PublicationList";
import PreprintList from "../component/PreprintList";
import TalkList from "../component/TalkList";
import PastWork from "../component/PastWork";
import Education from "../component/Education";
import Award from "../component/Award";
import Service from "../component/Service";
import About from "../component/About";
import Navigation from "../component/Navigation";
import ReportList from "../component/ReportList";
import NoteList from "../component/NoteList";

const Home = () => {

    return (
        <Container>

            <Navigation/>
            <Header/>
            <Section>
                <CurrentWork/>
                <PublicationList/>
                <PreprintList/>
                <TalkList/>
                <ReportList/>
                <NoteList/>
                <PastWork/>
                <Education/>
                <Award/>
                <Service/>
                <About/>
            </Section>

            <Footer/>
        </Container>
    )
};

export default Home;
