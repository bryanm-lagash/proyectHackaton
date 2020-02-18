CREATE TABLE Sorteo(
  id int PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  cantidadParticipantes int NOT NULL,
  cantidadGanadores int NOT NULL,
  fechaSorteo DateTime NOT NULL,
  estado varchar(20) NOT NULL
);

CREATE TABLE Participante(
  id bigint PRIMARY KEY AUTO_INCREMENT,
  idSorteo int NOT NULL,
  nombre varchar(25) NOT NULL
);

INSERT INTO Participante (idSorteo, nombre) VALUES(1, "Bryan");
INSERT INTO Participante (idSorteo, nombre) VALUES(1, "Manuel");
INSERT INTO Participante (idSorteo, nombre) VALUES(1, "Fernando");

ALTER TABLE Participante
	ADD CONSTRAINT Participante_Sorteo_fk FOREIGN KEY (idSorteo)
		REFERENCES Sorteo (id);

DROP TABLE Sorteo

INSERT INTO Sorteo (nombre, cantidadParticipantes, cantidadGanadores, fechaSorteo, estado) VALUES('Primer Sorteo', 10, 1, SYSDATE(), 'Vigente');


ALTER TABLE Sorteo  AUTO_INCREMENT = 1