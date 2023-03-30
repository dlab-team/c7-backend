-- Carga de datos tabla jos_statuses

BEGIN;

INSERT INTO public.job_statuses(job_status)
	VALUES 
		('Cesante, busco empleo en TI por primera vez.'),
		('Cesante, ya he trabajado antes en TI.'),
		('Tengo trabajo en TI, pero busco otro.'),
		('Tengo trabajo en otra área, pero busco en TI.');
END;