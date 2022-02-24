import styled from "styled-components";
import recommendationsOfTheDayResponse from "./assets/recommendations-of-the-day.json";
import AboutSection from "./components/AboutSection";
import Section from "./components/Section";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* TODO: add color file */
  background-color: orange;
  /* TODO: add spacing file */
  padding: 1rem;
`;

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  height: 100%;
  background-color: #fff;
  margin: auto;
  padding-top: 0.5rem;
`;

const VideosContainer = styled(Section)`
  height: auto;
  padding-bottom: 1rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 0.5rem;
  color: #fff;
`;
// TODO: move this to componented and add cinema style
const Video = styled.article`
  background-color: gray;
  aspect-ratio: 325/216;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props) => props.backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 1.5rem;
  background-color: gray;
`;

const recommendationsOfTheDay = recommendationsOfTheDayResponse.items;

function App() {
  return (
    <Wrapper>
      <Container>
        <VideosContainer>
          <header>
            <h4>Tips voor vandaag</h4>
          </header>
          <VideoGrid>
            {recommendationsOfTheDay.map((recommendation) => (
              <Video backgroundImg={recommendation.img}>
                <aside>{recommendation.additionalInfo}</aside>
                <header>{recommendation.title}</header>
              </Video>
            ))}
          </VideoGrid>
        </VideosContainer>
        <Spacer />
        <Section />
        <Spacer />
        <AboutSection />
      </Container>
    </Wrapper>
  );
}

export default App;
