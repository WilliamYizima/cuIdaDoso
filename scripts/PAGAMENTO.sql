-- Table: public."PAGAMENTO"

-- DROP TABLE public."PAGAMENTO";

CREATE TABLE public."PAGAMENTO"
(
    "Metodo_pagamento" "char",
    "Id_pagamento" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    id_plano integer NOT NULL,
    CONSTRAINT "PK_PAGAMENTO_(id]_pagamento)" PRIMARY KEY ("Id_pagamento"),
    CONSTRAINT "UK_PAGAMENTO(Id_pagamento)" UNIQUE ("Id_pagamento")
,
    CONSTRAINT "FK_PAGAMENTO/PLANO(Id_plano)" FOREIGN KEY (id_plano)
        REFERENCES public."Plano" ("Id_plano") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."PAGAMENTO"
    OWNER to "CuidaDoso";

-- Index: fki_FK_PAGAMENTO/PLANO(Id_plano)

-- DROP INDEX public."fki_FK_PAGAMENTO/PLANO(Id_plano)";

CREATE INDEX "fki_FK_PAGAMENTO/PLANO(Id_plano)"
    ON public."PAGAMENTO" USING btree
    (id_plano)
    TABLESPACE pg_default;