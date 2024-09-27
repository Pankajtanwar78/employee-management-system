export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  spacing: (factor: number) => string;
}