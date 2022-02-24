import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.article`
  background-image: url(${(props) => props.backgroundImg});
  aspect-ratio: 500/216;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right 0;
  background-color:rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TvSerie({ tvSerie }) {
  return (
    <Container backgroundImg={tvSerie.img}>
      <IconContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="blue"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </IconContainer>
      <header>{tvSerie.title}</header>
    </Container>
  );
}

TvSerie.propTypes = {
  tvSerie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TvSerie;
