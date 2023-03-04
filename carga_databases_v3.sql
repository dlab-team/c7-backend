-- Carga de datos tabla databases

BEGIN;

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