DROP DATABASE IF EXISTS click_db;
CREATE database click_db;

USE click_db;
CREATE TABLE `Matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `screenname` varchar(100) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `ethnicity` varchar(100) NOT NULL,
  `height-feet` int(1) NOT NULL,
  `height-inches` int(1) NOT NULL,
  `zodiac` varchar(20) NOT NULL,
  `married` BOOLEAN,
  `industry` varchar(100) NOT NULL,
  `occupation` varchar(100) NOT NULL,
  `interest1` varchar(30),
  `interest2` varchar(30),
  `interest3` varchar(30),
  `interest4` varchar(30),
  `interest5` varchar(30),
  `imageurl` varchar(300)
  PRIMARY KEY (`id`)
) 