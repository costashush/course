CREATE TABLE table2 (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,fName VARCHAR(30));
   INSERT INTO table2 
        (id ,fName)
   VALUES 
        (1,'111'),
       (2,'222'),
       (3,'3333'),
       (4,'4444');
       
   CREATE TABLE table1 (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,fName VARCHAR(30));
   INSERT INTO table1 
        (id ,fName)
   VALUES 
        (1,'lee'),
       (2,'benny'),
       (3,'mahmud'),
       (4,'costa');
       
    SELECT * FROM table1;
   
   SELECT t1.*,t2.* from table1 t1, table2 t2 where t1.id=t2.id;
    SELECT t1.*,t2.* from table1 t1 INNER JOIN table2 t2 ON t1.id=t2.id;
    SELECT t1.*,t2.fName from table1 t1 INNER JOIN table2 t2 ON t1.id=t2.id;
    SELECT t1.*,t2.fName as fname2 from table1 t1 INNER JOIN table2 t2 ON t1.id=t2.id;