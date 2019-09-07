-- Table: public."Plano"

-- DROP TABLE public."Plano";

CREATE TABLE public."Plano"
(
    "Id_plano" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Nome_plano" "char",
    "Duração_plano" date,
    "Descricao_plano" "char",
    CONSTRAINT "PK_PLANO_(Id_plano)" PRIMARY KEY ("Id_plano"),
    CONSTRAINT "UK_PLANO(Id_plano)" UNIQUE ("Id_plano")
        INCLUDE("Id_plano")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Plano"
    OWNER to "CuidaDoso";