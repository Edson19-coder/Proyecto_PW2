use graficaswebii;

CREATE TABLE IF NOT EXISTS Usuario (
id_usuario INT AUTO_INCREMENT,
rol BOOL DEFAULT TRUE, /* True para admin, false para user*/
activo BOOL DEFAULT TRUE,
usuario VARCHAR(50) UNIQUE NOT NULL,
nombre VARCHAR(50) NULL,
apellido VARCHAR(50) NULL,
correo VARCHAR(50) NOT NULL,
contra VARCHAR(50) NOT NULL,
avatar VARCHAR(255) NULL,
Constraint PK_Usuario PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS FormaPago(
id_FP INT AUTO_INCREMENT,
predeterminada BOOL NULL,
usuarioid INT NOT NULL,
tipo int NOT NULL, /* 1-Debito, 2-Credito, 3-Nose si hay otro, si solo usaremos 2, este puede ser bool en vez de int*/
numTarjeta VARCHAR(255) NOT NULL,
codSeg TINYINT NULL,
fechaVenc  VARCHAR(20) NOT NULL,
Constraint PK_FormaPago PRIMARY KEY (id_FP),
Constraint FK_FormaPago FOREIGN KEY (usuarioid) REFERENCES Usuario(id_usuario)
);

CREATE TABLE IF NOT EXISTS Domicilio(
id_dom INT AUTO_INCREMENT,
predeterminada BOOL NULL,
usuarioid INT NOT NULL,
calle VARCHAR(255) NOT NULL,
colonia VARCHAR(255) NOT NULL,
codPostal VARCHAR(255) NOT NULL,
Constraint PK_FormaPago PRIMARY KEY (id_FP),
Constraint FK_FormaPago FOREIGN KEY (usuarioid) REFERENCES Usuario(id_usuario)
);

CREATE TABLE IF NOT EXISTS Categoria(
id_categoria INT AUTO_INCREMENT,
categoria VARCHAR(50) UNIQUE NOT NULL,
descripcion VARCHAR(255) NOT NULL,
activo BOOL DEFAULT TRUE,
Constraint PK_Categoria PRIMARY KEY (id_categoria)
);

CREATE TABLE IF NOT EXISTS Componente(
id_componente INT AUTO_INCREMENT,
categoriaid VARCHAR(50) NOT NULL,
descripcion VARCHAR(255) NOT NULL,
foto VARCHAR(255) NULL, /* No se si existe el blob en mongodb */
costo DOUBLE NOT NULL,
cantidad INT NOT NULL,
activo BOOL DEFAULT TRUE,
Constraint PK_Componente PRIMARY KEY (id_componente),
Constraint FK_Componente FOREIGN KEY (categoriaid) REFERENCES Categoria(id_categoria)
);

CREATE TABLE IF NOT EXISTS Historial(
id_historial INT AUTO_INCREMENT,
componenteid INT NOT NUll,
usuarioid INT NOT NULL,
fechaBuscado datetime default now(),
Constraint PK_Historial PRIMARY KEY (id_historial),
Constraint FK_Historial FOREIGN KEY (usuarioid) REFERENCES Usuario(id_usuario),
Constraint FK_Historial2 FOREIGN KEY (componenteid) REFERENCES Componente(id_componente)
);

CREATE TABLE IF NOT EXISTS Carrito(
id_carrito INT AUTO_INCREMENT,
componenteid INT NOT NUll,
usuarioid INT NOT NULL,
Constraint PK_Carrito PRIMARY KEY (id_carrito),
Constraint FK_Carrito FOREIGN KEY (usuarioid) REFERENCES Usuario(id_usuario),
Constraint FK_Carrito2 FOREIGN KEY (componenteid) REFERENCES Componente(id_componente)
);

CREATE TABLE IF NOT EXISTS Compatibilidad(
id_comp INT AUTO_INCREMENT,
componenteid INT NOT NUll,
componenteid2 INT NOT NULL,
Constraint PK_Compatibilidad PRIMARY KEY (id_comp),
Constraint FK_Compatibilidad FOREIGN KEY (componenteid) REFERENCES Componente(id_componente),
Constraint FK_Compatibilidad FOREIGN KEY (componenteid2) REFERENCES Componente(id_componente)
);
