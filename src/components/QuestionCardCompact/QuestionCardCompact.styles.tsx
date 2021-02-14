import styled from "styled-components";
import {
  gray2,
  gray3,
  lucaBlue,
  lucaDarkBlue,
  disabledIconGray,
} from "../../StyleConstants";

export const CardContainer = styled.div`
  padding: 32px 0 16px 0;
  display: grid;
  grid-template-columns: 88px auto;
`;

export const AvatarAndLikes = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
`;

export const AvatarImage = styled.div`
  background-color: ${disabledIconGray};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  margin-bottom: 26px;
`;

export const ThumbsUpAndDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64px;

  img {
    cursor: pointer;
    height: 20px;
    width: 20px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const QuestionAndSocial = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;

  img {
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Question = styled.h2`
  margin: unset;
  margin-bottom: 8px;
  font-family: "Inter SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: ${gray2};
`;

export const Details = styled.div`
  cursor: pointer;
  width: fit-content;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 16px;
  transition: 0.5s;

  color: ${disabledIconGray};

  &.expand {
    white-space: unset;
    height: fit-content;
  }
`;

export const CourseCommentAndStar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserAndCourse = styled.div`
  width: fit-content;

  p {
    margin: unset;
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    color: ${gray3};

    &.from-user {
      color: ${lucaDarkBlue};
    }
  }

  strong {
    cursor: pointer;
    font-family: "Inter SemiBold";
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    color: ${lucaBlue};
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CommentsAndStars = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${disabledIconGray};

  img {
    height: 20px;
    width: 20px;

    &:hover {
      transform: scale(1.2);
    }
  }

  .message {
    margin-right: 4px;
  }

  .star {
    margin-left: 16px;
  }
`;
