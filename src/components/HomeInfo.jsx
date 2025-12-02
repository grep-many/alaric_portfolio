import React from "react";
import { DialogContent } from "../constants";

const HomeInfo = ({ currentStage }) => {
  const Component = React.useMemo(() => {
    const stage =
      !currentStage || currentStage > 4 || currentStage < 1 ? 1 : currentStage;
    return DialogContent[stage];
  }, [currentStage]);

  return <Component />;
};

export default HomeInfo;
