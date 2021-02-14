import React, { useState } from "react";
import { icons } from "../../IconsAndLogos";

import { QuestionData } from "../../redux/types/question.types";

import {
  CardContainer,
  AvatarAndLikes,
  AvatarImage,
  ThumbsUpAndDown,
  QuestionAndSocial,
  Question,
  Details,
  CourseCommentAndStar,
  UserAndCourse,
  CommentsAndStars,
} from "./QuestionCardCompact.styles";

interface QuestionCardProps {
  commentNumber?: number;
  fromSameUser?: boolean;
}

const QuestionCardCompact: React.FC<QuestionData & QuestionCardProps> = ({
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
      <AvatarAndLikes>
        <AvatarImage />
        <ThumbsUpAndDown>
          <img src={icons.ThumbsUpIcon} alt="thumbs up" />
          <img src={icons.ThumbsDownIcon} alt="thumbs down" />
        </ThumbsUpAndDown>
      </AvatarAndLikes>
      <QuestionAndSocial>
        <Question>{question}</Question>
        <Details
          onClick={() => setExpand(!expand)}
          className={expand ? "expand" : ""}
        >
          {details}
        </Details>
        <CourseCommentAndStar>
          <UserAndCourse>
            <p className={fromSameUser ? "from-user" : ""}>
              {userName} en <strong>{course_name}</strong>
            </p>
          </UserAndCourse>
          <CommentsAndStars>
            <img
              className="message"
              src={icons.MessageCircleIcon}
              alt="question icon"
            />
            {commentNumber}
            {active && (
              <img
                className="star"
                src={icons.StarActive}
                alt="star active"
                onClick={() => setActive(!active)}
              />
            )}
            {!active && (
              <img
                className="star"
                src={icons.StarBlankIcon}
                alt="star active"
                onClick={() => setActive(!active)}
              />
            )}
          </CommentsAndStars>
        </CourseCommentAndStar>
      </QuestionAndSocial>
    </CardContainer>
  );
};

export default QuestionCardCompact;
