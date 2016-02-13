USE gc200197303;

CREATE TABLE contactForm (
	firstname VARCHAR(20),
    lastname VARCHAR(20),
    email VARCHAR(40),
    message VARCHAR(2000)
);

INSERT INTO contactForm VALUES
	('Tara', 'McNeil', 'taralynnemcneil@gmail.com', 'This is a sample message to test my site');
    
SELECT * FROM contactForm;