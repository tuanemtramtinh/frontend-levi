import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const HomeIcon = ({ color = "#02954F", ...props }: SvgProps) => (
  <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      d="M0.750023 8.40356L9.50062 1.20092C10.231 0.599694 11.269 0.599694 11.9994 1.20092L20.75 8.40356"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.22766 2.281L4.22766 5.62485C3.50141 6.23197 3.13828 6.53553 2.94415 6.95515C2.75003 7.37478 2.75003 7.85617 2.75003 8.81896V12.5189C2.75003 16.399 2.75003 18.3392 3.9216 19.5445C5.09318 20.7499 6.97879 20.7499 10.75 20.7499C14.5212 20.7499 16.4069 20.7499 17.5784 19.5445C18.75 18.3392 18.75 16.399 18.75 12.5189V8.81896C18.75 7.85617 18.75 7.37478 18.5559 6.95515C18.3617 6.53553 17.9986 6.23197 17.2724 5.62485L13.2724 2.281C12.0642 1.27099 11.4601 0.765991 10.75 0.765991C10.0399 0.765991 9.43583 1.27099 8.22766 2.281Z"
      stroke={color}
      strokeWidth={1.5}
    />
    <Path
      d="M8.49987 14.834H12.9999"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);