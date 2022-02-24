import styled from "styled-components";
import recommendationsOfTheDayResponse from "./assets/recommendations-of-the-day.json";
import tvSeriesResponse from "./assets/tv-series.json";
import AboutSection from "./components/AboutSection";
import Section from "./components/Section";
import Article from "./components/Article";
import TVSerie from "./components/TVSerie";

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

const ArticleContainer = styled(Section)`
  height: auto;
  padding-bottom: 1rem;
`;

const AricleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 0.5rem;
  color: #fff;
`;

const Spacer = styled.div`
  height: 1.5rem;
  background-color: gray;
`;

const TvSeriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 1rem;
  color: #fff;
  padding-bottom: 1rem;
`;

const recommendationsOfTheDay = recommendationsOfTheDayResponse.items;
const tvSeries = tvSeriesResponse.items;

function App() {
  return (
    <Wrapper>
      <Container>
        <ArticleContainer>
          <header>Tips voor vandaag</header>
          <AricleGrid>
            {recommendationsOfTheDay.map((recommendation) => (
              <Article recommendation={recommendation} />
            ))}
          </AricleGrid>
        </ArticleContainer>
        <Spacer />
        <Section>
          <header>
            <h4>Afleveringen</h4>
            <TvSeriesContainer>
              {tvSeries.map((tvSerie) => (
                <TVSerie tvSerie={tvSerie} />
              ))}
            </TvSeriesContainer>
          </header>
        </Section>
        <Spacer />
        <AboutSection />
      </Container>
    </Wrapper>
  );
}

export default App;
