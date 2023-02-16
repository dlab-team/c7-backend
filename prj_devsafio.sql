
BEGIN;


CREATE TABLE IF NOT EXISTS public.roles
(
    id bigserial NOT NULL,
    name character varying(50)[] NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.user_statuses
(
    id bigserial NOT NULL,
    name character varying(50)[] NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id bigserial NOT NULL,
    role_id bigint,
    status_id bigint,
    name character varying(50)[] NOT NULL,
    last_name character varying(50)[] NOT NULL,
    email character varying(100)[] NOT NULL,
    password character varying(25)[] NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.education_experiences
(
    id bigserial NOT NULL,
    work_profile_id bigint NOT NULL,
    name character varying(50)[] NOT NULL,
    institute_name character varying(50)[] NOT NULL,
    type character varying(50)[],
    start_month character varying(20)[],
    end_month character varying(20)[],
    start_year bigint,
    end_year bigint,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.work_profiles
(
    id bigserial NOT NULL,
    user_id bigint,
    gender character varying(10)[],
    phone_number character varying(15)[],
    city character varying(50)[],
    country character varying(50)[],
    education_status character varying(50)[] NOT NULL,
    english_level character varying(50)[] NOT NULL,
    cv_url character varying(100)[] NOT NULL,
    linkedin_url character varying(100)[] NOT NULL,
    github_url character varying(100)[] NOT NULL,
    featured_project character varying(100)[] NOT NULL,
    work_availabity character varying(30)[],
    dev_experience character varying(100)[] NOT NULL,
    educational_level character varying(100)[] NOT NULL,
    commnet text,
    ideal_work_comment text NOT NULL,
    relocation_option character varying(25)[],
    visa character varying(50)[] NOT NULL,
    design integer NOT NULL,
    portfolio_url character varying(100)[],
    stack character varying(25)[] NOT NULL,
    additional_tools_comments text,
    employment_status_current character varying(25)[] NOT NULL,
    current_salary character varying(10)[],
    availibity_status character varying(25)[],
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.work_profiles
    IS 'Esta tabla se puede relacionar con "users". Yo diría que de uno a muchos con la FK en esta tabla';

CREATE TABLE IF NOT EXISTS public.soft_skills
(
    id bigserial NOT NULL,
    name character varying(50)[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.tools
(
    id bigserial NOT NULL,
    name character varying(50)[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.databases
(
    id bigserial NOT NULL,
    name character varying(50)[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.dev_languages
(
    id bigserial NOT NULL,
    name character varying(50)[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.soft_skills_work_profiles
(
    id bigserial NOT NULL,
    soft_skills_id bigint NOT NULL,
    work_profiles_id bigint NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.tools_work_profiles
(
    id bigserial NOT NULL,
    tools_id bigint NOT NULL,
    work_profiles_id bigint NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.databases_work_profiles
(
    id bigserial NOT NULL,
    databases_id bigint NOT NULL,
    work_profiles_id bigint NOT NULL,
    level integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.dev_languages_work_profiles
(
    id bigserial NOT NULL,
    dev_languages_id bigint NOT NULL,
    work_profiles_id bigint NOT NULL,
    level integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.contact_companies
(
    id bigserial NOT NULL,
    name character varying(50)[] NOT NULL,
    last_name character varying(50)[] NOT NULL,
    email character varying(100)[] NOT NULL,
    phone character varying(12)[] NOT NULL,
    company_name character varying(50)[] NOT NULL,
    doubts character varying(50)[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.work_areas
(
    id bigserial NOT NULL,
    name character varying(50)[],
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.contact_companies_work_areas
(
    contact_companies_id bigserial NOT NULL,
    work_areas_id bigserial NOT NULL
);

ALTER TABLE IF EXISTS public.users
    ADD FOREIGN KEY (role_id)
    REFERENCES public.roles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.users
    ADD FOREIGN KEY (status_id)
    REFERENCES public.user_statuses (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.education_experiences
    ADD FOREIGN KEY (work_profile_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.work_profiles
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.soft_skills_work_profiles
    ADD FOREIGN KEY (soft_skills_id)
    REFERENCES public.soft_skills (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.soft_skills_work_profiles
    ADD FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tools_work_profiles
    ADD FOREIGN KEY (tools_id)
    REFERENCES public.tools (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.tools_work_profiles
    ADD FOREIGN KEY (work_profiles_id)
    REFERENCES public.work_profiles (id) MATCH SIMPLE
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

END;
