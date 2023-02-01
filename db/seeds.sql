INSERT INTO department(name)
VALUES("Discovery"),
        ("Design"),
        ("Development"),
        ("Customer Success");




INSERT INTO role(title,salary,department_id)
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






INSERT INTO employee(first_name,last_name,role_id,Manager)
VALUES("Sarah","Boathouse","Engineer",2),
      ("Alysa","Conner","Lead",4),
      ("Jeremy","Freshwater","Engineer",2),
      ("Fredie","Fishman","Director"),
      ("Nancy","Catfish","Lead"),
      ("Roger","RainbowTroute","Product Manager",5),
      ("Fried","Fish","Analyst",5),
      ("Libby", "Starfish","CSM",9),
      ("Levi","Jeans","Lead",10),
      ("Andrew","Clam","Director"),
      ("Nic","NeedleFish","Support Associate",10);

