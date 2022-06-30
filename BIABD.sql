create database bialandingpage;
use bialandingpage;
drop database bialandingpage;

select * from user_client;
select * from user_admin;

drop table client;

insert into user_client(data_cadastro, email, nome, telefone) values('2022-06-30',"arthur@gmail.com", "Arthur", 34998648710);
insert into user_admin(password, username) values('$2a$10$dFjsYceeQz/N6dlsOArpKeAwJSybVm7jcMH6u2JnT6CvdY7SJwKLu', 'arthur@gmail.com');