import LucaLogo from "./static/logos/luca_logo_color.svg";
import InicioIcon from "./static/icons/ic_home_32.svg";
import VideoIcon from "./static/icons/ic_video_32.svg";
import QuizzesIcon from "./static/icons/ic_quizzes_32.svg";
import StudyPlanIcon from "./static/icons/ic_studyplan_32.svg";
import CommunityActiveFilled from "./static/icons/ic_community_fill_active_32.svg";
import CommunityActive from "./static/icons/ic_community_active_32.svg";
import HelpIcon from "./static/icons/ic_help_32.svg";

// Sizes
export const size = {
  mobile: "414px",
  tablet: "744px",
  desktop: "1280px",
};

export const maxWidthQueries = {
  mobile: { query: `(max-width: ${size.mobile})` },
  tablet: { query: `(max-width: ${size.tablet})` },
  desktop: { query: `(max-width: ${size.desktop})` },
};

// Colors
// Items
export const lucaBlue = "#3843D0";
export const lucaDarkBlue = "#212B80";
export const lucaRed = "#F96654";
export const lucaYellow = "#FFD704";
export const lucaPink = "#FC9CFE";

// Background
export const white = "#FFFFFF";
export const black = "#000000";
export const lightGrayBg = "#E5E5E5";
export const medGrayBg = "#F1F2F8";
export const medBlueBg = "#EDEEFF";

// Icon
export const disabledIconGrayLight = "#D9DAE3";
export const disabledIconGray = "#9A9CB5";

// ICONS

export const logos = {
  LucaLogo,
};

export const icons = {
  InicioIcon,
  VideoIcon,
  QuizzesIcon,
  StudyPlanIcon,
  CommunityActiveFilled,
  CommunityActive,
  HelpIcon,
};
