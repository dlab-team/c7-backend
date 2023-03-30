-- Database: prj_devsafio

-- DROP DATABASE IF EXISTS prj_devsafio;

CREATE DATABASE prj_devsafio
    WITH
    OWNER = estoiko
    ENCODING = 'UTF8'
    LC_COLLATE = 'es_CL.UTF-8'
    LC_CTYPE = 'es_CL.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE prj_devsafio
    IS 'Base de datos para incubadora C7';