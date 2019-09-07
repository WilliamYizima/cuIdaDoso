-- Table: public."Tipo_Servico"

-- DROP TABLE public."Tipo_Servico";

CREATE TABLE public."Tipo_Servico"
(
    "Nome_tipo" "char",
    "Id_tipo_servico" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT "PK_TIPO_SERVICO" PRIMARY KEY ("Id_tipo_servico")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Tipo_Servico"
    OWNER to "CuidaDoso";