-- Script de carga tablas catalogos BD devsafío.

BEGIN;

	INSERT INTO public.dev_languages(name)
		VALUES 
			('Python'),
			('JavaScript'),
			('HTML/CSS'),
			('Java'),
			('PHP'),
			('Ruby'),
			('Scala, Perl y/o Go'),
			('C/C++'),
			('Kotlin'),
			('Swift'),
			('C#'),
			('TypeScript'),
			('Assembly'),
			('R'),
			('Go'),
			('Bash/Shell');

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

    INSERT INTO public.job_statuses(job_status)
	    VALUES 
	    	('Cesante, busco empleo en TI por primera vez.'),
	    	('Cesante, ya he trabajado antes en TI.'),
	    	('Tengo trabajo en TI, pero busco otro.'),
	    	('Tengo trabajo en otra área, pero busco en TI.');

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

	INSERT INTO public.tools(name)
		VALUES 
			('Github'),
			('Adobe Illustrator'),
			('Adobe Photoshop'),
			('Adobe XD'),
			('AWS'),
			('Docker'),
			('Figma'),
			('GIT'),
			('Google Analytics'),
			('Google Cloud Plataform'),
			('Google Data Studio'),
			('Invision'),
			('InVision Studio'),
			('Jira'),
			('Kubernetes'),
			('Marvel'),
			('Microsoft Excel'),
			('Microsoft Azure'),
			('Miro'),
			('Power BI'),
			('Proto.io'),
			('Qlik'),
			('Sketch'),
			('SPSS'),
			('Tableau'),
			('Unity 3D'),
			('Unreal Engine'),
			('Zepelin');

	INSERT INTO public.databases(name)
		VALUES 
			('Oracle'),
			('Cassandra'),
			('SQLite'),
			('Redis'),
			('MongoDB'),
			('PostgreSQL'),
			('MySQL'),
			('Firebase Realtime Database'),
			('MariaDB'),
			('Microsoft SQL Server'),
			('JQuery'),
			('React'),
			('Spring'),
			('Angular'),
			('Vue.js'),
			('Laravel'),
			('Django'),
			('Ruby On Rails'),
			('ASP.NET o ASP.NETCore'),
			('Flask'),
			('Express.js'),
			('FastAPI'),
			('.NET'),
			('Node.js');

	
END;
