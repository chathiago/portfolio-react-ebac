import styled from "styled-components";

export const GithubSection = styled.div `
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    max-height: 158px;
    margin-right: 16px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      margin-right: 0;
    }
  }
`
