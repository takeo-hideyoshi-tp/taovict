import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { random, range, merge } from "lodash";
import Radium, { Style } from "radium";
import * as docgen from "react-docgen";
import { VictoryAxis } from "../../src/index";
import { VictoryTheme, appendLinkIcon, ecologyPlaygroundLoading } from "formidable-landers";

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!../../src/components/victory-axis/victory-axis"))}
          scope={{range, random, React, ReactDOM, VictoryAxis}}
          playgroundtheme="elegant"
          customRenderers={merge(appendLinkIcon, ecologyPlaygroundLoading)}
        />
        <Style rules={VictoryTheme}/>
      </div>
    );
  }
}

export default Radium(Docs);
