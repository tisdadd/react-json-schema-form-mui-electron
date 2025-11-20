import React from "react";
import Broken from "./Broken";
import Working from "./Working";

function BaseView() {
  return (
    <div>
      <h1>Examples</h1>
      <h2>Working (copy/pasted files)</h2>
      <Working />
      <h2>Broken (from npm, uncomment to see)</h2>
      {/* <Broken /> */}
    </div>
  );
}

export default BaseView;
