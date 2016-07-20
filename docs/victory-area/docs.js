import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium, { Style } from "radium";
import * as docgen from "react-docgen";
import { merge } from "lodash";
import { VictoryArea, VictoryStack, VictoryGroup, VictoryScatter } from "../../src/index";
import { VictoryTheme, appendLinkIcon, ecologyPlaygroundLoading } from "formidable-landers";

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!../../src/components/victory-area/victory-area"))}
          scope={{merge, React, ReactDOM, VictoryArea, VictoryStack, VictoryGroup, VictoryScatter}}
          playgroundtheme="elegant"
          customRenderers={merge(ecologyPlaygroundLoading, appendLinkIcon)}
        />
        <Style rules={VictoryTheme}/>
      </div>
    );
  }
}

export default Radium(Docs);
