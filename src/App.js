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
  max-width: 1200px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
}

export default App;
