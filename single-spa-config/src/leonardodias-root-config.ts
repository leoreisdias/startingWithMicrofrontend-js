import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication({
  name: "@leonardodas/react-single",
  app: () => System.import("@leonardodas/react-single"),
  activeWhen: (location) => location.pathname === "/react-single", // True => Render
  // activeWhen: ["/react-single"], // In array, it renders whenever this string is in the URL -> /react-single/...
});

layoutEngine.activate();

start();
