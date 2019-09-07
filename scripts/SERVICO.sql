-- Table: public."Servico"

-- DROP TABLE public."Servico";

CREATE TABLE public."Servico"
(
    "Id_servico" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    id_prestador integer NOT NULL,
    data_atendimento date NOT NULL,
    CONSTRAINT "PK_SERVICO_(Id_servico)" PRIMARY KEY ("Id_servico"),
    CONSTRAINT "FK_SERVICO_(Id_prestador)" FOREIGN KEY (id_prestador)
        REFERENCES public."Prestador" ("Id_prestador") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Servico"
    OWNER to "CuidaDoso";

-- Index: fki_FK_SERVICO_(Id_prestador)

-- DROP INDEX public."fki_FK_SERVICO_(Id_prestador)";

CREATE INDEX "fki_FK_SERVICO_(Id_prestador)"
    ON public."Servico" USING btree
    (id_prestador)
    TABLESPACE pg_default;