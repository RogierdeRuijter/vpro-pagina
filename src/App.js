import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* TODO: add color file */
  background-color: orange;
  /* TODO: add spacing file */
  padding: 16px;
`;

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  height: 100%;
  background-color: #fff;
  margin: auto;
`;

const Section = styled.section`
  width: 100%;
  height: 400px;
`;

const Spacer = styled.div`
  height: 24px;
  background-color: lightgray;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Section />
        <Spacer />
        <Section />
        <Spacer />
        <Section />
      </Container>
    </Wrapper>
  );
}

export default App;
