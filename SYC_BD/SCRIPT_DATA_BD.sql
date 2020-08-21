INSERT INTO dbo.Clients (NumeroDoc, Nombre, Direccion)
VALUES
(1095838938, 'Jhon Alejandro Sandoval Miranda', 'Calle200 Floridablanca'),
(1098898907, 'Gladys Carreño Salazar', 'Calle 5 #19-07 Los Pinos'),
(900236789, 'Distribuciones Colombia LTDA', 'Carrera 15, Bucaramanga Santander'),
(34567743, 'STEVE JOBS', 'SILICON VALLEY - CA, USA'),
(12345678, 'LINUS TORVALDS', 'SILICON VALLEY - CA, USA'),
(98765432, 'JON DOE', 'SILICON VALLEY - CA, USA'),
(101112131, 'BILL GATES', 'SILICON VALLEY - CA, USA')
;

INSERT INTO dbo.Invoice_Statuses (Description)
VALUES
('VIGENTE'),
('PAGADA'),
('VENCIDA');

INSERT INTO dbo.Invoices
(_IdClient, ClientsId_Client, CodeStatus, StatusesCodeStatus, Valor, FechaFac)
VALUES
(1, 1, 2, 2, 200000, '2019-05-30 00:00:00.000'),
(1, 1, 2, 2, 200000, '2019-12-19 00:00:00.000'),
(4, 4, 2, 2, 30000, '2019-12-19 00:00:00.000'),
(4, 4, 2, 2, 20000, '2020-08-21 00:00:00.000'),
(4, 4, 2, 2, 50000, '2020-08-21 00:00:00.000'),
(5, 5, 2, 2, 30000, '2018-04-28 00:00:00.000'),
(5, 5, 2, 2, 20000, '2018-11-19 00:00:00.000'),
(5, 5, 2, 2, 500000, '2019-05-05 00:00:00.000'),
(5, 5, 1, 1, 1000000, '2020-08-05 00:00:00.000'),
(7, 7, 3, 3, 1000000, '2020-07-30 00:00:00.000')
;