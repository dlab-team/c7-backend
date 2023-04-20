-- Carga de datos tabla job_areas

BEGIN;
	INSERT INTO public.job_areas(job_area)
		VALUES
			('Desarrolador/a Full Stack'),
			('Desarrolador/a Bakc End'),
			('Desarrolador/a Front End'),
			('Diseñador/a UX / UX Research o UI'),
			('Desarrolador/a Móvil'),
			('Data Sientist'),
			('Especialista Machine Learning'),
			('Ingeniería de datos');
END;