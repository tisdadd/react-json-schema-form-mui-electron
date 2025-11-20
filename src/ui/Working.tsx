import React from "react";
import schema from "./schema";
import Form from "../open-source/rjsf/mui/src";
import validator from "@rjsf/validator-ajv8";
function working() {
  return <Form schema={schema} validator={validator} />;
}

export default working;
