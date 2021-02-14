import React, { useState } from "react";
import { icons } from "../../IconsAndLogos";

import { QuestionData } from "../../redux/types/question.types";

import {
  CardContainer,
  AvatarContainer,
  AvatarImage,
  TopBottomContainer,
  QuestionContainer,
  Question,
  CommentIconContainer,
  Details,
  UserInteractionContainer,
  LikeAndCourse,
  ShareAndFollow,
} from "./QuestionCard.styles";

interface QuestionCardProps {
  commentNumber?: number;
  fromSameUser?: boolean;
}

const QuestionCard: React.FC<QuestionData & QuestionCardProps> = ({
  username,
  user_avatar,
  course_name,
  question,
  details,
  commentNumber = 0,
  fromSameUser = false,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);

  const userName = fromSameUser ? "tuya" : username;

  return (
    <CardContainer>
      <AvatarContainer>
        {/* Avatar service was suspended...
      <AvatarImage style={{ backgroundImage: `url('${user_avatar}')` }} />
    */}
        <AvatarImage />
      </AvatarContainer>
      <TopBottomContainer>
        <QuestionContainer>
          <Question>{question}</Question>
          <CommentIconContainer>
            <img src={icons.MessageCircleIcon} alt="question icon" />
            {commentNumber}
          </CommentIconContainer>
        </QuestionContainer>
        <Details
          onClick={() => setExpand(!expand)}
          className={expand ? "expand" : ""}
        >
          {details}
        </Details>
        <UserInteractionContainer>
          <LikeAndCourse>
            <img src={icons.ThumbsUpIcon} alt="thumbs up" />
            <img src={icons.ThumbsDownIcon} alt="thumbs down" />
            <span className={fromSameUser ? "from-user" : ""}>
              Pregunta {userName} en&nbsp;
            </span>
            <strong>{course_name}</strong>
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
