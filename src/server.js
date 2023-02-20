import express from "express";
import userRoutes from "../src/user/infrastructure/routes/user.routes.js";
import statusRoutes from "../src/user/infrastructure/routes/roles.routes.js";
import rolesRoutes from "../src/user/infrastructure/routes/statuses.routes.js";
import workProfileRoutes from "./user/infrastructure/routes/work-profile.routes.js";
import educationExperiencesRoutes from "./user/infrastructure/routes/education_experiences.routes.js";
import workAreaRoutes from "../src/company/infrastructure/routes/work_area.routes.js";
import contactCompanyRoutes from "../src/company/infrastructure/routes/contact_company.routes.js";
import companyWorkAreaRoutes from "../src/company/infrastructure/routes/company_work_area.routes.js";
import userTestRoutes from "../src/user/infrastructure/routes/user_test.routes.js";
import testRoutes from "../src/user/infrastructure/routes/test.routes.js";

const routes = [
  userRoutes,
  statusRoutes,
  rolesRoutes,
  workProfileRoutes,
  educationExperiencesRoutes,
  workAreaRoutes,
  contactCompanyRoutes,
  companyWorkAreaRoutes,
  userTestRoutes,
  testRoutes,
];

const server = express();

server.use(express.json());

server.use([...routes]);

export default server;
