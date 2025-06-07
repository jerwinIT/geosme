import {
  HiHome,
  HiMap,
  HiInformationCircle,
  HiBuildingOffice2,
  HiArrowRightOnRectangle,
  HiUserPlus,
} from "react-icons/hi2";

export const LOGO_PATH = "/Images/Logo/geosme-logo-light.png";

export const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/map",
    label: "Map",
  },
  {
    id: 3,
    url: "/about",
    label: "About",
  },
];

export const mobileNavLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
    icon: HiHome,
  },
  {
    id: 2,
    url: "/map",
    label: "Map",
    icon: HiMap,
  },
  {
    id: 3,
    url: "/about",
    label: "About",
    icon: HiInformationCircle,
  },
  {
    id: 4,
    url: "/business-portal",
    label: "Business Portal",
    icon: HiBuildingOffice2,
  },
  {
    id: 5,
    url: "/auth/login",
    label: "Login",
    icon: HiArrowRightOnRectangle,
  },
  {
    id: 6,
    url: "/auth/signup",
    label: "Sign Up",
    icon: HiUserPlus,
  },
];
