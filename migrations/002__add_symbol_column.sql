ALTER TABLE language
    ADD COLUMN symbol CHAR(2);

INSERT INTO language (name, symbol)
VALUES ('English', 'EN'),
       ('Ukrainian', 'UA'),
       ('German', 'DE');
