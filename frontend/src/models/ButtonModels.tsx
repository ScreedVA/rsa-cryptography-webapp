interface ColorContrastConfigModel {
  baseColor: string;
  altColor: string;
}

export interface ButtonConfigModel {
  btnText: string;
  btnOnClick?: (e: any) => void;
  btnBorder?: string;
  btnBorderRadius?: string;
  btnPadding?: string;
  btnWidth?: string;
  btnTransition?: string;
  colorContrastConfig?: ColorContrastConfigModel;
  invertBackgroundColor?: boolean;
  btnType?: "submit" | "reset" | "button";
  disableBackgroundContrastHover?: boolean;
  // Tab Configuration
}
