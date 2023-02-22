INSERT INTO departments(department)
VALUES("Discovery"),
        ("Design"),
        ("Development"),
        ("Customer Success");




INSERT INTO roles(title,salary,department_id)
VALUES("Director",200000.00,1),
      ("Director",200000.00,2),
      ("Director",200000.00,3),
      ("Director",200000.00,4),
      ("Lead",150000.00,1),
      ("Lead",150000.00,2),
      ("Lead",150000.00,3),
      ("Lead",150000.00,4),
      ("Engineer",120000.00,3),
      ("Analyst",75000.00,1),
      ("CSM",70000.00,4),
      ("Product Manager",90000.00,1),
      ("Support Associate",55000.00,4),
      ("Assocate Developer",75000.00,3),
      ("Designer",80000.00,2);






INSERT INTO employees(first_name,last_name,role_id,manager_id)
VALUES
("Sarah","Boathouse",3,null),
      ("Alysa","Conner",4,null),
      ("Jeremy","Freshwater",4,1),
      ("Fredie","Fishman",5,2),
      ("Nancy","Catfish",1,3),
      ("Roger","RainbowTroute",3,2),
      ("Fried","Fish",4,3),
      ("Libby", "Starfish",4,4),
      ("Levi","Jeans",3,3),
      ("Andrew","Clam",1,8),
      ("Nic","NeedleFish",1,4);

