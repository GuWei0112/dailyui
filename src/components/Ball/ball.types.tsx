import React from "react";
export interface Props {
  name?: string | any;
  number?: number | any;
  style: React.CSSProperties;
  open?: () => void;
  close?: () => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
