import React from "react";
import { IconContext } from "react-icons";

import { CountBubble, IconWrapper } from "./IconStyles";

type IconProps = {
  icon: React.ReactNode;
  color?: string;
  count?: number;
  size?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

function CommonIcon({
  icon,
  onClick,
  style = {},
  color = "white",
  count = -1,
  size = "1.5rem",
}: IconProps) {
  return (
    <>
      <IconWrapper
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        style={style}
      >
        <IconContext.Provider
          value={{
            size: size,
            color: color ?? "black",
          }}
        >
          {icon}
        </IconContext.Provider>
        {count > -1 ? <CountBubble>{count}</CountBubble> : null}
      </IconWrapper>
    </>
  );
}

export default CommonIcon;
