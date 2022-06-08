USE employees;

INSERT INTO department
    (name)
VALUES
    ("Engineering")
    ("Marketing")
    ("Finance")
    ("Legal")

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Software Engineer", 120000, 1),
    ("Senior Manager", 200000, 2),
    ("Account Manager", 110000, 3),
    ("Lawyer", 90000, 4)

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ("Cash", "Quinn", 1),
    ("John", "Doe", 2),
    ("Tony", "Stark", 3),
    ("Tom", "Allen", 4),
