-- Table: public."Usuarios"

-- DROP TABLE public."Usuarios";

CREATE TABLE public."Usuarios"
(
    "RG" character varying(20) COLLATE pg_catalog."default",
    "Nome " character varying(50) COLLATE pg_catalog."default",
    "login " character varying(10) COLLATE pg_catalog."default",
    "Endereco" character varying(50) COLLATE pg_catalog."default",
    "Num_Endereco" character varying(10) COLLATE pg_catalog."default",
    "Bairro" character varying(30) COLLATE pg_catalog."default",
    "Cidade" character varying(50) COLLATE pg_catalog."default",
    "Estado" character varying(50) COLLATE pg_catalog."default",
    "Cep" character varying(20) COLLATE pg_catalog."default",
    "Bloqueado" boolean,
    "Email" character varying(50) COLLATE pg_catalog."default",
    "Telefone" character varying(18) COLLATE pg_catalog."default",
    "Dt_Nascimento" date,
    "Nome_Necessidades" character varying(15) COLLATE pg_catalog."default",
    "Descricao_Necessidades" character varying(30) COLLATE pg_catalog."default",
    id_plano integer,
    "Cpf" character varying(20)[] COLLATE pg_catalog."default" NOT NULL,
    "Senha" character varying(8000) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_USUARIOS_(cpf)" PRIMARY KEY ("Cpf"),
    CONSTRAINT "UK_USUARIOS_(CPF)" UNIQUE ("Cpf")
,
    CONSTRAINT "UK_USUARIOS_(RG)" UNIQUE ("RG")
,
    CONSTRAINT "FK_USUARIOS/PLANO_(id_plano)" FOREIGN KEY (id_plano)
        REFERENCES public."Plano" ("Id_plano") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Usuarios"
    OWNER to "CuidaDoso";

-- Index: fki_FK_USUARI/PLANO_(id_plano)

-- DROP INDEX public."fki_FK_USUARI/PLANO_(id_plano)";

CREATE INDEX "fki_FK_USUARI/PLANO_(id_plano)"
    ON public."Usuarios" USING btree
    (id_plano)
    TABLESPACE pg_default;