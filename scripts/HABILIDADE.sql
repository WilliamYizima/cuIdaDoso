-- Table: public."Habilidades"

-- DROP TABLE public."Habilidades";

CREATE TABLE public."Habilidades"
(
    id_habilidade integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    descricao_habilidade "char",
    nome_habilidade "char",
    tipo_habilidade "char",
    "Outros" character varying(500) COLLATE pg_catalog."default",
    CONSTRAINT "PK_HABILIDADE_(id_habilidade)" PRIMARY KEY (id_habilidade),
    CONSTRAINT "UK_HABILIDADES_(Id_habilidade)" UNIQUE (id_habilidade)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Habilidades"
    OWNER to "CuidaDoso";