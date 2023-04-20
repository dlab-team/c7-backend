BEGIN;


CREATE TABLE IF NOT EXISTS public.contact_companies
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(12) COLLATE pg_catalog."default" NOT NULL,
    company_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    doubts character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT contact_companies_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.databases
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT databases_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.dev_languages
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT dev_languages_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.education_experiences
(
    id bigserial NOT NULL,
    work_profile_id bigint NOT NULL,
    career_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    institution_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    institution_type character varying(50) COLLATE pg_catalog."default",
    start_month character varying(20) COLLATE pg_catalog."default",
    end_month character varying(20) COLLATE pg_catalog."default",
    start_year bigint,
    end_year bigint,
    CONSTRAINT education_experiences_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.roles
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.soft_skills
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT soft_skills_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.soft_skills_work_profiles
(
    id bigserial NOT NULL,
    soft_skills_id bigint NOT NULL,
    work_profiles_id bigint NOT NULL,
    CONSTRAINT soft_skills_work_profiles_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.tools
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT tools_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.tools_work_profiles
(
    id bigserial NOT NULL,
    tools_id bigint NOT NULL,
    work_profiles_id bigint NOT NULL,
    CONSTRAINT tools_work_profiles_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.user_statuses
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_statuses_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id bigserial NOT NULL,
    role_id bigint,
    status_id bigint,
    work_profile_id bigint,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.work_areas
(
    id bigserial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT work_areas_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.work_profiles
(
    id bigserial NOT NULL,
    phone_number character varying(15) COLLATE pg_catalog."default",
    city character varying(50) COLLATE pg_catalog."default",
    country character varying(50) COLLATE pg_catalog."default",
    gender character varying(10) COLLATE pg_catalog."default",
    current_salary character varying(10) COLLATE pg_catalog."default",
    educational_level character varying(100) COLLATE pg_catalog."default",
    current_education_status character varying(50) COLLATE pg_catalog."default",
    english_level character varying(50) COLLATE pg_catalog."default" NOT NULL,
    additional_tools_comments text COLLATE pg_catalog."default",
    cv_url character varying(100) COLLATE pg_catalog."default" NOT NULL,
    linkedin_url character varying(100) COLLATE pg_catalog."default" NOT NULL,
    github_url character varying(100) COLLATE pg_catalog."default" NOT NULL,
    portfolio_url character varying(100) COLLATE pg_catalog."default",
    best_project character varying(100) COLLATE pg_catalog."default" NOT NULL,
    dev_experience character varying(100) COLLATE pg_catalog."default" NOT NULL,
    relocation_option character varying(25) COLLATE pg_catalog."default",
    ideal_work_comment text COLLATE pg_catalog."default" NOT NULL,
    availability_job character varying(30) COLLATE pg_catalog."default",
    current_situation character varying(25) COLLATE pg_catalog."default",
    id_job_statuses bigint,
    CONSTRAINT work_profiles_pkey PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public.job_statuses
(
    id bigserial NOT NULL,
    job_status character varying(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.job_areas
(
    id bigserial NOT NULL,
    job_area character varying(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.job_areas_work_profiles
(
    job_areas_id bigserial NOT NULL,
    work_profiles_id bigint NOT NULL
);

CREATE TABLE IF NOT EXISTS public.contact_companies_work_areas
(
    contact_companies_id bigserial NOT NULL,
    work_areas_id bigserial NOT NULL
);

CREATE TABLE IF NOT EXISTS public.databases_work_profiles
(
    databases_id bigserial NOT NULL,
    work_profiles_id bigserial NOT NULL
);

CREATE TABLE IF NOT EXISTS public.dev_languages_work_profiles
(
    dev_languages_id bigserial NOT NULL,
    work_profiles_id bigserial NOT NULL
);

ALTER TABLE IF EXISTS public.education_experiences
    ADD CONSTRAINT education_experiences_work_profile_id_fkey FOREIGN KEY (work_profile_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.soft_skills_work_profiles
    ADD CONSTRAINT soft_skills_work_profiles_soft_skills_id_fkey FOREIGN KEY (soft_skills_id)
    REFERENCES public.soft_skills (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.soft_skills_work_profiles
    ADD CONSTRAINT soft_skills_work_profiles_work_profiles_id_fkey FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tools_work_profiles
    ADD CONSTRAINT tools_work_profiles_tools_id_fkey FOREIGN KEY (tools_id)
    REFERENCES public.tools (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tools_work_profiles
    ADD CONSTRAINT tools_work_profiles_work_profiles_id_fkey FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id)
    REFERENCES public.roles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.users
    ADD CONSTRAINT users_status_id_fkey FOREIGN KEY (status_id)
    REFERENCES public.user_statuses (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.users
    ADD FOREIGN KEY (work_profile_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.work_profiles
    ADD FOREIGN KEY (id_job_statuses)
    REFERENCES public.job_statuses (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.job_areas_work_profiles
    ADD FOREIGN KEY (job_areas_id)
    REFERENCES public.job_areas (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.job_areas_work_profiles
    ADD FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.contact_companies_work_areas
    ADD FOREIGN KEY (contact_companies_id)
    REFERENCES public.contact_companies (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.contact_companies_work_areas
    ADD FOREIGN KEY (work_areas_id)
    REFERENCES public.work_areas (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.databases_work_profiles
    ADD FOREIGN KEY (databases_id)
    REFERENCES public.databases (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.databases_work_profiles
    ADD FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dev_languages_work_profiles
    ADD FOREIGN KEY (dev_languages_id)
    REFERENCES public.dev_languages (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.dev_languages_work_profiles
    ADD FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;