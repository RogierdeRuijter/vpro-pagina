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
  font-weight: 800;
`;

const Triangle = styled.div`
  display: inline-block;

  border-left: 20px solid #b8b8b8;
  border-right: 20px solid orange;
  border-bottom: 12px solid orange;
  border-top: 12px solid #b8b8b8;
`;

const TriangleReverse = styled.div`
  display: inline-block;

  border-left: 20px solid orange;
  border-right: 20px solid #b8b8b8;
  border-bottom: 12px solid orange;
  border-top: 12px solid #b8b8b8;
`;

const Spacer = styled.div`
  display: inline-block;
  height: 1.5rem;
  background-color: #b8b8b8;
  width: calc(100% - 80px);
  position: relative;
`;

const TvSeriesContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  color: #fff;
  padding-bottom: 1rem;
  font-weight: 800;
`;

const ArticleContainerTitle = styled.h4`
  color: blue;
`;

const recommendationsOfTheDay = recommendationsOfTheDayResponse.items;
const tvSeries = tvSeriesResponse.items;

function App() {
  return (
    <Wrapper>
      <Container>
        <ArticleContainer>
          <header>
            <ArticleContainerTitle>Tips voor vandaag</ArticleContainerTitle>
          </header>
          <AricleGrid>
            {recommendationsOfTheDay.map((recommendation) => (
              <Article recommendation={recommendation} />
            ))}
          </AricleGrid>
        </ArticleContainer>
        <TriangleReverse />
        <Spacer />
        <Triangle />
        <Section>
          <header>
            <h3>Afleveringen</h3>
          </header>
          <TvSeriesContainer>
            {tvSeries.map((tvSerie) => (
              <TVSerie tvSerie={tvSerie} />
            ))}
          </TvSeriesContainer>
        </Section>
        <Spacer />
        <AboutSection />
      </Container>
    </Wrapper>
  );
}

export default App;
