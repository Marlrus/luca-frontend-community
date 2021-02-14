import { icons } from "../../StyleConstants";

export const NavDesktopOptions = [
  {
    label: "Inicio",
    icon: icons.InicioIcon,
  },
  {
    label: "Mis cursos",
    icon: icons.VideoIcon,
  },
  {
    label: "Quizzes",
    icon: icons.QuizzesIcon,
  },
  {
    label: "Mi plan de estudios",
    icon: icons.StudyPlanIcon,
  },
  {
    label: "Comunidad",
    icon: icons.CommunityActiveFilled,
    active: true,
  },
  {
    label: "Centro de ayuda",
    icon: icons.HelpIcon,
  },
];

export const NavMobileOptions = [
  {
    icon: icons.InicioIcon,
    iconOnly: true,
  },
  {
    icon: icons.VideoIcon,
    iconOnly: true,
  },
  {
    icon: icons.QuizzesIcon,
    iconOnly: true,
  },
  {
    icon: icons.StudyPlanIcon,
    iconOnly: true,
  },
  {
    icon: icons.CommunityActive,
    iconOnly: true,
    active: true,
  },
];
