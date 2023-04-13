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
import databasesRoutes from "./user/infrastructure/routes/misc_routes/databases.routes.js";
import devLanguagesRoutes from "./user/infrastructure/routes/misc_routes/dev_languages.routes.js";
import softSkillsRoutes from "./user/infrastructure/routes/misc_routes/soft_skills.routes.js";
import toolsRoutes from "./user/infrastructure/routes/misc_routes/tools.routes.js";
import testsDatabasesRoutes from "./user/infrastructure/routes/tests_misc_router/tests_databases.routes.js";
import testsDevLanguagesRoutes from "./user/infrastructure/routes/tests_misc_router/tests_dev_languages.routes.js";
import testsSoftSkillsRoutes from "./user/infrastructure/routes/tests_misc_router/tests_soft_skills.routes.js";
import testsToolsRoutes from "./user/infrastructure/routes/tests_misc_router/tests_tool.routes.js";
import workProfileDatabasesRoutes from "./user/infrastructure/routes/work_profile_routes/work_profile_databases.routes.js";
import workProfileDevLanguagesRoutes from "./user/infrastructure/routes/work_profile_routes/work_profile_dev_languages.routes.js";
import workProfileSoftSkillsRoutes from "./user/infrastructure/routes/work_profile_routes/work_profile_soft_skills.routes.js";
import workProfileToolsRoutes from "./user/infrastructure/routes/work_profile_routes/work_profile_tools.routes.js";

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
  databasesRoutes,
  devLanguagesRoutes,
  softSkillsRoutes,
  toolsRoutes,
  testsDatabasesRoutes,
  testsDevLanguagesRoutes,
  testsSoftSkillsRoutes,
  testsToolsRoutes,
  workProfileDatabasesRoutes,
  workProfileDevLanguagesRoutes,
  workProfileSoftSkillsRoutes,
  workProfileToolsRoutes,
];

const server = express();

server.use(express.json());

server.use([...routes]);

export default server;

const authRouter = require('./routes/auth');

app.use('/auth', authRouter);

