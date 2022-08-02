export interface Main {
  type: "default";
  primaryColor: string;
  logo: {
    dark: string;
    light: string;
  };
}

export interface Illustrations {
  set: "dozzy-1" | "sigma-1" | "sketchy-1" | "unitedpalms-1";
}

export interface Loader {
  logo: string;
  display: boolean;
  type: "default" | "spinner-message" | "spinner-logo";
}

export interface ScrollTop {
  display: boolean;
}

export interface Fixed {
  desktop: boolean;
  tabletAndMobile: boolean;
}

export interface Header {
  display: boolean;
  width: "fixed" | "fluid";
  menuIcon: "svg" | "font";
  fixed: Fixed;
}

export interface Aside {
  display: boolean;
  theme: "dark" | "light";
  fixed: boolean;
  menuIcon: "svg" | "font";
  minimized: boolean;
  minimize: boolean;
  hoverable: boolean;
}

export interface Content {
  width: "fixed" | "fluid";
}

export interface Toolbar {
  display: boolean;
  width: "fixed" | "fluid";
  fixed: Fixed;
}

export interface Footer {
  width: "fixed" | "fluid";
}

export interface LayoutConfig {
  themeName: string;
  themeVersion: string;
  demo: string;
  main: Main;
  illustrations: Illustrations;
  loader: Loader;
  scrollTop: ScrollTop;
  header: Header;
  toolbar: Toolbar;
  aside: Aside;
  content: Content;
  footer: Footer;
}

export default LayoutConfig;