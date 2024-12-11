export const Screen = {
  desktop: 1440,
  tablet: 768,
  phone: 320,
};

export const isWideScreen = window.innerWidth >= Screen.desktop;
export const isMediumScreen = window.innerWidth < Screen.desktop;
