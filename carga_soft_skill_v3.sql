-- Craandodatos a tabla Soft_skill

BEGIN;

	INSERT INTO public.soft_skills(name)
		VALUES 
			('Líder'),
			('Resilente/Perseverante'),
			('Comunicación/Sociable'),
			('Colaborativo/Empatía'),
			('Aprendizaje/Autónomo'),
			('Flexible/Adpatable'),
			('Responsable'),
			('Innovador/Curioso'),
			('Negociación'),
			('Resolución de Problemas'),
			('Productividad/Iniciativa');
END;