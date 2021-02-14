import React, { useState } from "react";
import { icons } from "../../IconsAndLogos";

import {
  CardContainer,
  AvatarContainer,
  AvatarImage,
  TopBottomContainer,
  QuestionContainer,
  Question,
  CommentIconContainer,
  Description,
  UserInteractionContainer,
  LikeAndCourse,
  ShareAndFollow,
} from "./QuestionCard.styles";

const QuestionCard: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <CardContainer>
      <AvatarContainer>
        <AvatarImage />
      </AvatarContainer>
      <TopBottomContainer>
        <QuestionContainer>
          <Question>¿Cuáles son los múltiplos del 7?</Question>
          <CommentIconContainer>
            <img src={icons.MessageCircleIcon} alt="question icon" />
            72
          </CommentIconContainer>
        </QuestionContainer>
        <Description>
          TTNHNSETOUHNSOTEHUNSTOHENSUTHTNHNSETOUHNSOTEHUNSTOHENSUTHTNHNSETOUHNSOTEHUNSTOHENSUTHNHNSETOUHNSOTEHUNSTOHENSUTH
        </Description>
        <UserInteractionContainer>
          <LikeAndCourse>
            <img src={icons.ThumbsUpIcon} alt="thumbs up" />
            <img src={icons.ThumbsDownIcon} alt="thumbs down" />
            <span>Pregunta juan.c23 en&nbsp;</span>
            <strong>Matemáticas 6º</strong>
          </LikeAndCourse>
          <ShareAndFollow>
            <img src={icons.ShareIcon} alt="share" />
            {active && (
              <img
                src={icons.StarActive}
                alt="star active"
                onClick={() => setActive(!active)}
              />
            )}
            {!active && (
              <img
                src={icons.StarBlankIcon}
                alt="star active"
                onClick={() => setActive(!active)}
              />
            )}
          </ShareAndFollow>
        </UserInteractionContainer>
      </TopBottomContainer>
    </CardContainer>
  );
};

export default QuestionCard;
