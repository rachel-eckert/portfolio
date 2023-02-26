import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";

import Main from "./components/Main.js";
/* Import and destructure main from src/component/index.js
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Main />);
