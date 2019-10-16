import React from "react";

import "./style.scss";

export default function Container({ children }) {
  return <div className="container container--v2">{children}</div>;
}
