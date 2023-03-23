import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpAaV1AQmFJfFBmR2lZd1RzdkU3HVdTRHRcQl5hSn5Rdk1gWnxecXA=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRGQmFLYVF2R2BJfVRwfF9FYkwgOX1dQl9gSX1RdUVhWXddc3dUQ2Q=;ORg4AjUWIQA/Gnt2VVhkQlFacldJWXxLfEx0RWFab1x6dF1MY15BNQtUQF1hSn5QdEZjW39Wc3dWRGlY;MTQyNjg3OUAzMjMwMmUzNDJlMzBJQUpDTUxYL2pwS1p5eWVjVVkyR200Q3d6Qll4K3M2R0I1TnByQlB0eWljPQ==;MTQyNjg4MEAzMjMwMmUzNDJlMzBvd2VuTE82NkdCMHVENHFjYit5N1gzZlpTc1o3RzFMT0o0eitWZXUrY2xnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmdWfFFpR2NbfE5yflVOal9TVAciSV9jS31TdUdgWX1eeHdWRWleVQ==;MTQyNjg4MkAzMjMwMmUzNDJlMzBOQWJGUTZHUFZqVTh1K3h0SmxyeEZ6SVhYUHpRU0xyNnNFdjM5cjJ1TjMwPQ==;MTQyNjg4M0AzMjMwMmUzNDJlMzBRYTlja2VRN09Ga2tZblh4WnZmcmVmMGt0VHBoQ0dLT0ZWK0Rud0NiVTRJPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJWXxLfEx0RWFab1x6dF1MY15BNQtUQF1hSn5QdEZjW39Wc3dRQ2VY;MTQyNjg4NUAzMjMwMmUzNDJlMzBPUnpPTnBybmcwSi91R1BGVXNMRG1ucjlYTE9Gam43ekdYT21QU25BMC9FPQ==;MTQyNjg4NkAzMjMwMmUzNDJlMzBUN2pDSHd0SjZYTGpNQ1RiWU1MYm10UjZIb3IyV1RFbklRS21NbDlDa0VRPQ==;MTQyNjg4N0AzMjMwMmUzNDJlMzBOQWJGUTZHUFZqVTh1K3h0SmxyeEZ6SVhYUHpRU0xyNnNFdjM5cjJ1TjMwPQ=="
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
