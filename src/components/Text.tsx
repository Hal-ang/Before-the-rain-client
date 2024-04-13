import { Colors, colors } from "@/styles/colors";
import styled, { CSSProperties, css } from "styled-components";

interface TextProps {
  typography?: string;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  bold?: boolean;
}

const Text = styled.span.attrs<TextProps>(({ typography }) => ({
  className: typography
}))<TextProps>(
  ({ color = "black", display, textAlign, fontWeight, bold }) => css`
    color: ${colors[color as Colors] || color};
    display: ${display};
    text-align: ${textAlign};
    font-weight: ${bold ? "bold" : fontWeight};
  `
);

export default Text;
