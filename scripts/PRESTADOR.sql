-- Table: public."Prestador"

-- DROP TABLE public."Prestador";

CREATE TABLE public."Prestador"
(
    "Id_prestador" integer NOT NULL,
    "Id_tipo_servico" integer,
    "Id_habilidade" integer,
    "Nome_prestador" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Senha" character varying(8000) COLLATE pg_catalog."default" NOT NULL,
    "Email" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Cpf" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "Rg" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "Endereco" character varying(50) COLLATE pg_catalog."default",
    "Num_endereco" character varying(15) COLLATE pg_catalog."default",
    "Bairro" character(30) COLLATE pg_catalog."default",
    "Cidade" character varying(50) COLLATE pg_catalog."default",
    "Cep" character varying(20) COLLATE pg_catalog."default",
    "Telefone" character varying(18) COLLATE pg_catalog."default",
    "Dt_nascimento" date,
    CONSTRAINT "PK_PRESTADOR_(Id_prestador/CPF)" PRIMARY KEY ("Id_prestador", "Cpf"),
    CONSTRAINT "UK_PRESTADOR(ID_PRESTADOR/CPF/RG)" UNIQUE ("Id_prestador")
        INCLUDE("Cpf", "Rg"),
    CONSTRAINT "FK_PRESTADOR(Id_habilidade)" FOREIGN KEY ("Id_habilidade")
        REFERENCES public."Habilidades" (id_habilidade) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_PRESTADOR_(Id_tipo_servico)" FOREIGN KEY ("Id_tipo_servico")
        REFERENCES public."Tipo_Servico" ("Id_tipo_servico") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Prestador"
    OWNER to "CuidaDoso";

-- Index: fki_FK_PRESTADOR(Id_habilidade)

-- DROP INDEX public."fki_FK_PRESTADOR(Id_habilidade)";

CREATE INDEX "fki_FK_PRESTADOR(Id_habilidade)"
    ON public."Prestador" USING btree
    ("Id_habilidade")
    TABLESPACE pg_default;

-- Index: fki_FK_PRESTADOR_(Id_tipo_servico)

-- DROP INDEX public."fki_FK_PRESTADOR_(Id_tipo_servico)";

CREATE INDEX "fki_FK_PRESTADOR_(Id_tipo_servico)"
    ON public."Prestador" USING btree
    ("Id_tipo_servico")
    TABLESPACE pg_default;