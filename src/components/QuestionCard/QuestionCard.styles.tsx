import styled from "styled-components";
import { gray2, gray3, lucaBlue, disabledIconGray } from "../../StyleConstants";

export const CardContainer = styled.div`
  padding: 24px 0 16px 0;
  display: flex;
  justify-content: flex-start;
`;

export const AvatarContainer = styled.div`
  padding-left: 8px;
  margin-right: 32px;
`;

export const AvatarImage = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 56px;
  width: 56px;
`;

export const TopBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const QuestionContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled.h2`
  margin: unset;
  font-family: "Inter SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: ${gray2};
`;

export const CommentIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-right: 24px;

  color: ${disabledIconGray};

  img {
    height: 20px;
    width: 20px;
    margin-right: 4px;
  }
`;

export const Description = styled.div`
  max-width: 448px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 16px;

  color: ${gray3};
  opacity: 0.7;
`;

export const UserInteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeAndCourse = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-right: 20px;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    color: ${gray3};
    margin-left: 14px;
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

export const ShareAndFollow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    cursor: pointer;
    height: 24px;
    width: 24px;
    transition: 0.2s;
    margin-right: 24px;
  }
`;
