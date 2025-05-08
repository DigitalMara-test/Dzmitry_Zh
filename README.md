Create a backend using TypeScript and a PostgreSQL database with one table named “log”.
The exposed backend API must enable the insertion and listing of data.
The log table must have:
an “id” column as the primary key
an “inserted_at” column of type “timestamptz” with the default value: “now()”
a “json” column of type “json”
All columns must have the “NOT NULL” constraint.
Create a html page to show the data written to the database and a form to enter data.
Create a CI pipeline to test the backend.
We expect that this assignment takes about 2-3 hrs to complete. Feel free to use any tools/environment you wish or are comfortable with to accomplish the task if not specifically mentioned otherwise.
