import Header from "../component/Header";
import CurrentWork from "../component/CurrentWork";
import Footer from "../component/Footer";
import {Container, Section} from 'react-bulma-components';
import PublicationList from "../component/PublicationList";
import TalkList from "../component/TalkList";
import Education from "../component/Education";
import Funding from "../component/Funding";
import Service from "../component/Service";
import About from "../component/About";
import Navigation from "../component/Navigation";
import ReportList from "../component/ReportList";
import NoteList from "../component/NoteList";
import CourseList from "../component/CourseList";
import PatentList from "../component/PatentList";

const Home = () => {

    return (
        <Container>

            <Navigation/>
            <Header/>
            <Section>
                <About/>
                <CurrentWork/>
                <PublicationList/>
                <TalkList/>
                <Service/>
                <Funding/>
                <Education/>
                <CourseList/>
                <PatentList/>
                <ReportList/>
                <NoteList/>
                {/*<PreprintList/>*/}
                {/*<PastWork/>*/}
            </Section>

            <Footer/>
        </Container>
    )
};

export default Home;
