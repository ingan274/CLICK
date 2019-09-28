DROP DATABASE IF EXISTS click_db;
CREATE database click_db;

USE click_db;
CREATE TABLE `Matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `ethnicity` varchar(100),
  `height-feet` int(1) NOT NULL,
  `height-inches` int(1) NOT NULL,
  `zodiac` varchar(20),
  `job_position` varchar(100) NOT NULL,
  `company` varchar(100) NOT NULL,
  `interest1` varchar(300),
  `interest2` varchar(300),
  `interest3` varchar(300),
  `interest4` varchar(300),
  `interest5` varchar(300),
  `description` varchar(3000),
  `imageurl` varchar(300)
  PRIMARY KEY (`id`)
) 