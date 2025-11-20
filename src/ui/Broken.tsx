import React, { lazy, Suspense } from "react";
import schema from "./schema";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

function Broken() {
  return (
      <Form schema={schema} validator={validator} />;
  );
}

export default Broken;
