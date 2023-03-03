-- Generar base de datos en Postgres llamada 'c7-provisorio-v2' (o cualquier nombre de preferencia, para eso modificar archivo sequelize-pg.js en la carpeta 'database');
-- Se utilizan credenciales postgres (user) y admin (password), modificar a las credenciales personales;
-- Descomentar lineas en el archivo index.js para que Sequelize pueda generar las tablas
-- Ejecutar la app con 'npm run dev'

Rutas:

'http://localhost:3005/' + ->

'/roles'
'/status'
'/users'
'/userstests'
'/test'
'/workprofiles'
'/educationexperiences'
'/workprofiledatabases'
'/workprofiledevlanguages'
'/workprofilesoftskills'
'/workprofiletools'
'/testsdatabases'
'/testsdevlanguages'
'/testssoftskills'
'/teststools'
'/databases'
'/devlanguages'
'/softskills'
'/tools'

- Las rutas están pendientes de modificación, para abreviarlas.

* Ejemplo para crear Rol, Status y User en la base de datos:

---

POST -> http://localhost:3000/roles
{
"name":"admin"
}
Crea registro en la tabla Roles con rol ADMIN

---

---

POST -> http://localhost:3000/status
{
"name":"active"
}
Crea registro en la tabla Statuses con rol ACTIVE

---

---

POST -> http://localhost:3000/users
{
"name":"Pato",
"last_name":"Ule",
"email":"pato@gmail.com",
"password":"12345",
"rol_id":"1",
"status_id":"1"
}
Crea registro en la tabla Users

---

---

POST -> http://localhost:3000/workprofiles
{
"gender":"male",
"phone_number":"999-999",
"city":"santiago",
"country":"chile",
"education_status":"graduated",
"english_level":"advanced",
"cv_url":"www.cv.com",
"linkedin_url":"www.linkedin.com",
"github_url":"www.github.com",
"featured_project":"poke",
"work_availability":"fulltime",
"dev_experience":"none",
"educational_level":"incomplete university",
"comment":"none",
"ideal_work_comment":"none",
"relocation_option":"nope",
"visa":"of course",
"design":1,
"portfolio_url":"www.portfolio.com",
"stack":"java spring",
"additional_tools_comments":"none",
"employment_status_current":"unemployed",
"userId":1,
"current_salary":"0",
"availability_status":"inmediatly"
}
Crea registro en la tabla Work_profiles asociado al userId: 1

---
