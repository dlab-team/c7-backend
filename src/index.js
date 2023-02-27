import server from "./server.js";
import { sequelize } from "./database/sequelize-pg.js";

// Tablas generadas con Sequelize Sync().
// Descomentar todo para generar las tablas en DB con Sequelize
// import "../src/user/application/model/role.model.js";
// import "../src/user/application/model/status.model.js";
// import "../src/user/application/model/user.model.js";
// import "../src/user/application/model/work-profile.model.js";
// import "../src/user/application/model/education_experiences.model.js";
// import "../src/company/application/model/company_work_area.model.js";
// import "../src/company/application/model/work_area.model.js";
// import "../src/company/application/model/contact_company.model.js";
// import "../src/user/application/model/user_test.model.js";
// import "../src/user/application/model/test.model.js";

const PORT = 3005;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente con la base de datos");
    server.listen(PORT, (err) => {
      if (err) console.log("Error in server setup");
      console.log("Server listening on Port", PORT);
    });
    // sequelize.sync();
  } catch (error) {
    console.log("No es posible conectarse a la base de datos", error);
  }
}

main();