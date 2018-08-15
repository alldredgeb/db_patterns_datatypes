select * from db_patterns_datatypes_pics_1 
join db_patterns_datatypes_pics_2 
on db_patterns_datatypes_pics_1.id = db_patterns_datatypes_pics_2.original_img_id 
where db_patterns_datatypes_pics_1.id = $1