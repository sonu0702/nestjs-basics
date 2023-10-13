# Basic NestJs Server

# Postman Link for APIs exposed 
- https://api.postman.com/collections/22605699-8c231bc8-e2f2-4393-8ede-9c0493ff342c?access_key=PMAT-01HCN13TDAANSV3Y9JEGEQX5G7

# Schema of table  `Basic`

```
CREATE TABLE public.basic (
	id serial4 NOT NULL,
	basic_uuid varchar NOT NULL,
	str_value varchar NULL,
	number_value numeric NOT NULL DEFAULT '0'::numeric,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NOT NULL DEFAULT now(),
	CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY (id),
	CONSTRAINT "UQ_b93f95ea1b6ef6cff6c1d991ddd" UNIQUE (basic_uuid)
);
```

# Running locally
1. copy sample.env into .env file and replace values.
2. Run `npm run install`
3. Run `npm run start:dev`