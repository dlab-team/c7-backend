-- Cargando datos a tabla dev_languages

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
	
END;