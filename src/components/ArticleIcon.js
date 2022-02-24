import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  height: 24px;
  width: 24px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: lightgray;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ArticleIcon({ type }) {
  return (
    <Container>
      {type === "video" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="blue"
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
      )}
      {type === "audio" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="blue"
          viewBox="0 0 16 16"
        >
          <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
          <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
        </svg>
      )}
      {type === "news" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="blue"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      )}
    </Container>
  );
}

ArticleIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ArticleIcon;
