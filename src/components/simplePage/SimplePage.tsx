// page wrapper

import React from "react";

const SimplePage = ({ children }: { children: React.ReactNode }) => {
  return <div className="simple-page__wrapper">{children}</div>;
};

export default SimplePage;
