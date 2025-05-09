## Task

Create a backend using TypeScript and a PostgreSQL database with one table named “log”.

The exposed backend API must enable the insertion and listing of data.

The log table must have:

- an “id” column as the primary key
- an “inserted_at” column of type “timestamptz” with the default value: “now()”
- a “json” column of type “json”

All columns must have the “NOT NULL” constraint.

Create a html page to show the data written to the database and a form to enter data.

Create a CI pipeline to test the backend.

We expect that this assignment takes about 2-3 hrs to complete. Feel free to use any tools/environment you wish or are comfortable with to accomplish the task if not specifically mentioned otherwise.

## Run postgres

```bash
docker run -it --rm -p 5432:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=db --name=postgres-log postgres:17.5
```

## API

### List logs

```bash
curl http://localhost:3000/api/logs
```

### Create log

```bash
curl -X POST -H "Content-Type: application/json" http://localhost:3000/api/logs --data '{ "b": "q" }'
```

## DB schema

```bash
docker exec -it postgres-log psql --dbname=db --username=user

\d+
                                   List of relations
 Schema | Name | Type  | Owner | Persistence | Access method |    Size    | Description
--------+------+-------+-------+-------------+---------------+------------+-------------
 public | log  | table | user  | permanent   | heap          | 8192 bytes |
(1 row)

\d+ "log"

   Column    |            Type             | Collation | Nullable |      Default      | Storage  | Compression | Stats target | Description
-------------+-----------------------------+-----------+----------+-------------------+----------+-------------+--------------+-------------
 id          | text                        |           | not null |                   | extended |             |              |
 inserted_at | timestamp(0) with time zone |           | not null | CURRENT_TIMESTAMP | plain    |             |              |
 json        | jsonb                       |           | not null |                   | extended |             |              |
Indexes:
    "log_pkey" PRIMARY KEY, btree (id)
Access method: heap
```
