-- Table: public."Agenda"

-- DROP TABLE public."Agenda";

CREATE TABLE public."Agenda"
(
    "Inicio_atendimento" date,
    "Fim_atendimento" date,
    "ID_agenda" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Id_prestador" integer NOT NULL,
    "Cpf_usuario" character varying(20)[] COLLATE pg_catalog."default",
    CONSTRAINT "PK_ID_AGENDA(Id_agenda)" PRIMARY KEY ("ID_agenda"),
    CONSTRAINT "UK_AGENDA(Id_agenda)" UNIQUE ("ID_agenda")
,
    CONSTRAINT "FK_AGENDA_(Cpf_usuario)" FOREIGN KEY ("Cpf_usuario")
        REFERENCES public."Usuarios" ("Cpf") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_AGENDA_(Id_prestador)" FOREIGN KEY ("Id_prestador")
        REFERENCES public."Prestador" ("Id_prestador") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Agenda"
    OWNER to "CuidaDoso";

-- Index: fki_FK_AGENDA_(Cpf_usuario)

-- DROP INDEX public."fki_FK_AGENDA_(Cpf_usuario)";

CREATE INDEX "fki_FK_AGENDA_(Cpf_usuario)"
    ON public."Agenda" USING btree
    ("Cpf_usuario" COLLATE pg_catalog."default")
    TABLESPACE pg_default;

-- Index: fki_FK_AGENDA_(Id_prestador)

-- DROP INDEX public."fki_FK_AGENDA_(Id_prestador)";

CREATE INDEX "fki_FK_AGENDA_(Id_prestador)"
    ON public."Agenda" USING btree
    ("Id_prestador")
    TABLESPACE pg_default;Ss