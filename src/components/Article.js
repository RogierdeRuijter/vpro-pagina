import styled from "styled-components";
import PropTypes from "prop-types";
import ArticleIcon from "./ArticleIcon";

const Container = styled.article`
  background-color: gray;
  aspect-ratio: 325/216;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: ${(props) => props.cinema && "flex-end"};
  background-image: url(${(props) => props.backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
`;

const VideoBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 35px;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

// TODO: Align VPRO Cinema text with other header text
function Article({ recommendation }) {
  return (
    <Container
      backgroundImg={recommendation.img}
      cinema={recommendation.cinema}
    >
      {recommendation.cinema && <VideoBanner>VPRO Cinema</VideoBanner>}
      {!recommendation.cinema && <aside>{recommendation.additionalInfo}</aside>}
      {!recommendation.cinema && <ArticleIcon type={recommendation.type} />}
      <header>{recommendation.title}</header>
    </Container>
  );
}

Article.propTypes = {
  recommendation: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    additionalInfo: PropTypes.string,
    cinema: PropTypes.bool,
    type: PropTypes.string,
  }).isRequired,
};

export default Article;
