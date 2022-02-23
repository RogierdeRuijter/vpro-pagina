import styled from "styled-components";

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
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Section = styled.section`
  width: 100%;
  height: 400px;
`;

const VideosContainer = styled(Section)`
  height: auto;
  padding-bottom: 1rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 0.5rem;
`;

const Video = styled.article`
  background-color: gray;
  aspect-ratio: 16/9;
`;

const Spacer = styled.div`
  height: 1.5rem;
  background-color: lightgray;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <VideosContainer>
          <header>Tips voor vandaag</header>
          <VideoGrid>
            <Video>
              <header>title</header>
            </Video>
            <Video>
              <header>title</header>
            </Video>
            <Video>
              <header>title</header>
            </Video>
            <Video>
              <header>title</header>
            </Video>
            <Video>
              <header>title</header>
            </Video>
            <Video>
              <header>title</header>
            </Video>
          </VideoGrid>
        </VideosContainer>
        <Spacer />
        <Section />
        <Spacer />
        <Section />
      </Container>
    </Wrapper>
  );
}

export default App;
