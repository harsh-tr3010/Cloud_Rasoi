-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2024 at 06:31 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xyz`
--

-- --------------------------------------------------------

--
-- Table structure for table `caterersdata`
--

CREATE TABLE `caterersdata` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `profileImage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `caterersdata`
--

INSERT INTO `caterersdata` (`id`, `name`, `phone`, `address`, `description`, `profileImage`) VALUES
(1, 'harsh', '99999', 'sikandra', 'hii i am harsh ', '1722946072507-biryani.jpg'),
(2, 'lappu', '090909', 'agra', 'hello all ', '1722946705971-venderreg.png'),
(3, 'Deeksha caters', '9897', 'delhi,agra', 'best food in delhi', '1722959058261-Screenshot 2024-07-04 142051.png');

-- --------------------------------------------------------

--
-- Table structure for table `crmenudata`
--

CREATE TABLE `crmenudata` (
  `plan_id` int(11) NOT NULL,
  `plans` varchar(30) NOT NULL,
  `price` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `plan_imageURL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crmenudata`
--

INSERT INTO `crmenudata` (`plan_id`, `plans`, `price`, `description`, `plan_imageURL`) VALUES
(2, 'Pizza', '200', 'Pav Bhaji is a popular Indian street food that originated in Mumbai. It is a spicy and flavorful vegetable curry made with a variety of vegetables and spices, served with buttered and toasted buns kno', './Pizza.png'),
(3, 'Pav Bhaaji', '300', 'Pav Bhaji is a popular Indian street food that originated in Mumbai. It is a spicy and flavorful vegetable curry made with a variety of vegetables and spices, served with buttered and toasted buns kno', './PavBhaaji.png'),
(4, 'Burger', '100', 'Pav Bhaji is a popular Indian street food that originated in Mumbai. It is a spicy and flavorful vegetable curry made with a variety of vegetables and spices, served with buttered and toasted buns kno', './Burger.png');

-- --------------------------------------------------------

--
-- Table structure for table `deliveryboy`
--

CREATE TABLE `deliveryboy` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `deliveryboy`
--

INSERT INTO `deliveryboy` (`id`, `name`, `phone`, `address`, `gender`) VALUES
(1, 'kalu', '9898798708', 'kamla padi', 'male'),
(2, 'aalu', '999999999', 'nagla padi', 'male'),
(3, 'bhalu', '88888888', 'dayalbagh', 'male'),
(4, 'naina', '8787878787', 'new agra', 'female'),
(5, 'chalu', '6363636363', 'sikandra', 'male'),
(6, 'Talu', '1515151551', 'sikandra', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `deliveryboys`
--

CREATE TABLE `deliveryboys` (
  `id` int(10) NOT NULL,
  `name` varchar(10) NOT NULL,
  `phonenumber` varchar(10) NOT NULL,
  `vehiclenumber` varchar(10) NOT NULL,
  `licensenumber` varchar(20) NOT NULL,
  `pincode` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `deliveryboys`
--

INSERT INTO `deliveryboys` (`id`, `name`, `phonenumber`, `vehiclenumber`, `licensenumber`, `pincode`) VALUES
(1, 'AADIL', '8445996869', 'UP80U5743', 'Up20bk20', '282007'),
(2, 'HARSH', '9759472146', 'UP80T3450', 'Up20BL40', '282006'),
(3, 'FAIZAH', '8979340226', 'UP80X2024', 'UP80U5743', '282001'),
(4, 'ANAND', '1234567890', 'UP80R2134', 'UP80k1923', '282101'),
(5, 'RITIK', '9759472145', 'UP20U5743A', '123454232', '282007'),
(6, 'harsh ki g', '7676', 'up80 badma', '09090', '111111');

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `age` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`id`, `name`, `age`) VALUES
(1, 'kalu', 688);

-- --------------------------------------------------------

--
-- Table structure for table `empdata`
--

CREATE TABLE `empdata` (
  `foodname` varchar(50) NOT NULL,
  `vendorname` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  `fooddescription` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `empdata`
--

INSERT INTO `empdata` (`foodname`, `vendorname`, `price`, `fooddescription`) VALUES
('ram', '', '', ''),
('raaaaam', '', '', ''),
('us', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `foods`
--

INSERT INTO `foods` (`id`, `name`, `description`, `price`) VALUES
(1, 'Pizza', 'Cheese Pizza with tomato sauce', 12.99),
(2, 'Burger', 'Beef Burger with lettuce and tomato', 8.99),
(3, 'Sushi', 'Salmon Sushi with rice', 15.99);

-- --------------------------------------------------------

--
-- Table structure for table `masterlogin`
--

CREATE TABLE `masterlogin` (
  `id` int(11) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `masterlogin`
--

INSERT INTO `masterlogin` (`id`, `uname`, `password`) VALUES
(1, 'aalu', 'aalu123'),
(2, 'kaalu', 'kaa123');

-- --------------------------------------------------------

--
-- Table structure for table `ourrasoi`
--

CREATE TABLE `ourrasoi` (
  `rasoi_id` int(11) NOT NULL,
  `rasoi_name` varchar(40) NOT NULL,
  `rasoi_address` varchar(50) NOT NULL,
  `rasoi_phone` varchar(30) NOT NULL,
  `rasoi_category` varchar(50) NOT NULL,
  `rasoi_description` varchar(300) NOT NULL,
  `rasoi_imageURL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ourrasoi`
--

INSERT INTO `ourrasoi` (`rasoi_id`, `rasoi_name`, `rasoi_address`, `rasoi_phone`, `rasoi_category`, `rasoi_description`, `rasoi_imageURL`) VALUES
(1, 'Shri Banke Bihari Misthan Bhandar', 'Sikandra, Agra', '989898989', 'North Indian', 'tasty and hygienic food', './FirstRasoi.png'),
(2, 'Shri Dauji Chatpata', 'Bhagwan talkies', '0808080808', 'South Indian', 'Tasty and delicious food ', './SecondRasoi.png'),
(3, 'Saihub', 'Kamla nagar,agra', '1212121212', 'Chinese', 'Crunchy spring roll', './ThirdRasoi.png');

-- --------------------------------------------------------

--
-- Table structure for table `profiledata`
--

CREATE TABLE `profiledata` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `pincode` varchar(20) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profiledata`
--

INSERT INTO `profiledata` (`id`, `name`, `email`, `phone`, `pincode`, `city`, `state`, `country`) VALUES
(1, 'xyzz', 'xyz', '098', '56565', '', '', ''),
(2, 'Anand', 'anandvarshney274@gmail.com', '9897512091', '282005', '', '', ''),
(3, 'Anand', 'anandvarshney274@gmail.com', '9897512091', '282005', '', '', ''),
(4, 'Anand', 'anandvarshney274@gmail.com', '9897512091', '282005', '', '', ''),
(5, 'Anand', 'anandvarshney274@gmail.com', '9897512091', '282005', '', '', ''),
(6, 'Chaalu', 'chaalu@gmail.com', '9887766554', '99999', '', '', ''),
(7, 'hello', 'hii@gmail.com', '2323232323', '2239482', '', '', ''),
(8, 'sharara', 'sharara@gmail.com', '1231231231', '121212', '', '', ''),
(9, 'karara', 'karara@gmail.com', '0987654321', '123123', '', '', ''),
(10, 'raju', 'raj@gmail.com', '6565656565', '000099', '', '', ''),
(11, 'jaggu', 'jaggu@gmail.com', '4545454545', '121200', '', '', ''),
(12, 'chutki', 'chutki@gmail.com', '9898', '45', '', '', ''),
(13, 'tuntun', 'tun@gmail.com', '3838', '009', '', '', ''),
(14, 'ram', 'ram@gmail.com', '123', '12', '', '', ''),
(15, 'laalu', 'laal@gmail.com', '9898989898', '282282', '', '', ''),
(16, 'nobita', 'nobita@gmail.com', '9000000009', '101010', '', '', ''),
(17, 'kajal', 'kajal@gmail.com', '66666', '1', '', '', ''),
(18, 'hattori', 'hattori@gmail.com', '999', '4242', '', '', ''),
(19, 'm', 'm', 'm', 'm', '', '', ''),
(20, 'p', 'p', 'p', 'p', '', '', ''),
(21, 'a', 'a', 'a', 'a', '', '', ''),
(22, 'q', 'q', 'q', 'q', '', '', ''),
(23, 'w', 'w', 'w', 'w', '', '', ''),
(24, 'e', 'e', 'e', 'e', '', '', ''),
(25, 't', 't', 'tt', 't', '', '', ''),
(26, 'r', 'r', 'r', 'r', '', '', ''),
(27, 'k', 'k', '1', '1', '', '', ''),
(28, '7', '7', '7', '7', '', '', ''),
(29, '66', '66', '66', '66', '', '', ''),
(30, 'tarasingh', 'tara@gmail.com', '7575757575', '222211', '', '', ''),
(31, 'z', 'z', 'z', 'z', '', '', ''),
(32, 'n', 'n', 'n', 'n', '', '', ''),
(33, 'n', 'n', 'n', 'n', '', '', ''),
(34, 'm', 'm', 'm', 'm', '', '', ''),
(35, 'pookiee', 'poo', 'poo', 'poo', '', '', ''),
(36, 'gaurav sir', 'gaura@email.com', '888', '282007', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `question` varchar(100) NOT NULL,
  `ans1` varchar(100) NOT NULL,
  `ans2` varchar(100) NOT NULL,
  `ans3` varchar(100) NOT NULL,
  `ans4` varchar(100) NOT NULL,
  `right_s` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `question`, `ans1`, `ans2`, `ans3`, `ans4`, `right_s`) VALUES
(1, 'What is the capital of India?', 'Agra', 'New Delhi', 'Mumbai', 'Mathura', '2'),
(2, 'Which planet is known as the \"Red Planet\"?', 'Mars', 'Venus', 'Jupiter', 'Saturn', '1'),
(3, 'What is the largest mammal in the world?', 'Shark', 'Cat', 'Blue Whale', 'Lion', '3'),
(4, 'How many continents are there in the world?', 'Five', 'Four', 'Two', 'Seven', '4'),
(5, 'What is the tallest mountain in the world?', 'Mount Everest', 'Kangchenjunga', 'Annapurna', 'Denali', '1');

-- --------------------------------------------------------

--
-- Table structure for table `rasoidata`
--

CREATE TABLE `rasoidata` (
  `id` int(11) NOT NULL,
  `rasoi_name` varchar(50) NOT NULL,
  `rasoi_rating` varchar(20) NOT NULL,
  `rasoi_category` varchar(20) NOT NULL,
  `rasoi_address` varchar(30) NOT NULL,
  `rasoi_time` varchar(30) NOT NULL,
  `image_URL` varchar(300) NOT NULL,
  `pincode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rasoidata`
--

INSERT INTO `rasoidata` (`id`, `rasoi_name`, `rasoi_rating`, `rasoi_category`, `rasoi_address`, `rasoi_time`, `image_URL`, `pincode`) VALUES
(15, 'Shri Veena sweets', '', 'Traditional Sweets', 'Bhagwan talkies', '', '1722840593881-Screenshot (3).png', '282005'),
(16, 'muskan', '', 'chinese', 'kamla nagar', '', '1722879031838-Screenshot (3).png', '282004'),
(18, 'pakhi ki rasoi', '', 'italian', 'Kamla nagar', '', '1722879350295-Screenshot (3).png', '282004'),
(19, 'Raja ki rasoi', '', 'South indian', 'Nagla padi', '', '1722953485582-Screenshot 2024-07-30 012503.png', '282005'),
(20, 'deeksha ki rasoi', '', 'traditional sweets', 'sikandra', '', '1722959135011-Screenshot 2024-07-04 142051.png', '282007');

-- --------------------------------------------------------

--
-- Table structure for table `rasoi_menu`
--

CREATE TABLE `rasoi_menu` (
  `name` varchar(200) NOT NULL,
  `id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` int(11) NOT NULL,
  `rasoi_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rasoi_menu`
--

INSERT INTO `rasoi_menu` (`name`, `id`, `description`, `price`, `rasoi_id`) VALUES
('Shahi Paneer', 1, 'Tasty Tasty Tasty', 19000, 1),
('Shahi Paneer', 3, 'Soft and cheesy', 500, 1),
('Chhole Kulche', 4, 'Tasty', 220, 1),
('dahi vade', 6, 'too good', 120, 0),
('dum aloo', 7, 'aloo ki sabzi', 200, 0);

-- --------------------------------------------------------

--
-- Table structure for table `signupdata`
--

CREATE TABLE `signupdata` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `createpassword` varchar(30) NOT NULL,
  `confirmpassword` varchar(30) NOT NULL,
  `pincode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signupdata`
--

INSERT INTO `signupdata` (`id`, `name`, `email`, `phone`, `createpassword`, `confirmpassword`, `pincode`) VALUES
(1, 'Anand Varshney', 'cloud@gmail.com', '898989898', 'and123', 'and123', '282005'),
(7, 'vansh', 'vanshu@gmail.com', '12121211212', 'van321', 'van321', '2220002'),
(8, 'Muskan', 'muskan@gmail.com', '9191919919', 'mus098', 'mus098', '282004'),
(11, 'pakoda', 'pakoda1@gmail.com', '0606060606', 'pak123', 'pak123', '282002'),
(12, 'and', 'and@gmail.com', '1010101010', 'and321', 'and321', '282001'),
(13, 'a', 'asas', '1231231', '123', '123', '123123'),
(14, 's', 'sdsds', '1234', '12', '12', '123123'),
(15, 'q', 'qwe', '123', 'rew', 'rew', '213'),
(17, 'xyzz', 'xyz', '098', 'itz', 'itz', '56565'),
(21, 'Anand', 'anandvarshney274@gmail.com', '9897512091', 'and123', 'and123', '282005'),
(22, 'Chaalu', 'chaalu@gmail.com', '9887766554', 'chaal', 'chaal', '99999'),
(23, 'hello', 'hii@gmail.com', '2323232323', 'hii33', 'hii33', '2239482'),
(24, 'sharara', 'sharara@gmail.com', '1231231231', 'sh12', 'sh12', '121212'),
(25, 'karara', 'karara@gmail.com', '0987654321', 'kar1', 'kar1', '123123'),
(26, 'raju', 'raj@gmail.com', '6565656565', 'raj2', 'raj2', '000099'),
(27, 'jaggu', 'jaggu@gmail.com', '4545454545', 'jag', 'jag', '121200'),
(28, 'chutki', 'chutki@gmail.com', '9898', 'ch1', 'ch1', '45'),
(29, 'tuntun', 'tun@gmail.com', '3838', 'tun1', 'tun1', '009'),
(30, 'ram', 'ram@gmail.com', '123', 'ram2', 'ram2', '12'),
(31, 'laalu', 'laal@gmail.com', '9898989898', 'laal1', 'laal1', '282282'),
(32, 'nobita', 'nobita@gmail.com', '9000000009', 'nob9', 'nob9', '101010'),
(33, 'kajal', 'kajal@gmail.com', '66666', 'kal', 'kal', '1'),
(34, 'hattori', 'hattori@gmail.com', '999', 'hat1', 'hat1', '4242'),
(35, 'm', 'm', 'm', 'm', 'm', 'm'),
(36, 'p', 'p', 'p', 'p', 'p', 'p'),
(37, 'a', 'a', 'a', 'a', 'a', 'a'),
(38, 'q', 'q', 'q', 'q', 'q', 'q'),
(39, 'w', 'w', 'w', 'w', 'w', 'w'),
(40, 'e', 'e', 'e', 'e', 'e', 'e'),
(41, 't', 't', 'tt', 't', 't', 't'),
(42, 'r', 'r', 'r', 'r', 'r', 'r'),
(43, 'k', 'k', '1', '1', '1', '1'),
(44, '7', '7', '7', '7', '7', '7'),
(45, '66', '66', '66', '66', '66', '66'),
(46, 'tarasingh', 'tara@gmail.com', '7575757575', 'tara', 'tara', '222211'),
(47, 'z', 'z', 'z', 'z', 'z', 'z'),
(48, 'n', 'n', 'n', 'n', 'n', 'n'),
(49, 'n', 'n', 'n', 'n', 'n', 'n'),
(50, 'm', 'm', 'm', 'm', 'm', 'm'),
(51, 'pookiee', 'poo', 'poo', 'poo', 'poo', 'poo'),
(52, 'gaurav sir', 'gaura@email.com', '888', 'good', 'good', '282007');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `username` varchar(50) NOT NULL,
  `mobilenumber` varchar(40) NOT NULL,
  `password` varchar(50) NOT NULL,
  `repassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`username`, `mobilenumber`, `password`, `repassword`) VALUES
('Anand varshney', '9998877665', 'and#123', 'and#123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `caterersdata`
--
ALTER TABLE `caterersdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crmenudata`
--
ALTER TABLE `crmenudata`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `deliveryboy`
--
ALTER TABLE `deliveryboy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliveryboys`
--
ALTER TABLE `deliveryboys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `masterlogin`
--
ALTER TABLE `masterlogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ourrasoi`
--
ALTER TABLE `ourrasoi`
  ADD PRIMARY KEY (`rasoi_id`);

--
-- Indexes for table `profiledata`
--
ALTER TABLE `profiledata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rasoidata`
--
ALTER TABLE `rasoidata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rasoi_menu`
--
ALTER TABLE `rasoi_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signupdata`
--
ALTER TABLE `signupdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`mobilenumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `caterersdata`
--
ALTER TABLE `caterersdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `crmenudata`
--
ALTER TABLE `crmenudata`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `deliveryboy`
--
ALTER TABLE `deliveryboy`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `deliveryboys`
--
ALTER TABLE `deliveryboys`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `emp`
--
ALTER TABLE `emp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `masterlogin`
--
ALTER TABLE `masterlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ourrasoi`
--
ALTER TABLE `ourrasoi`
  MODIFY `rasoi_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `profiledata`
--
ALTER TABLE `profiledata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rasoidata`
--
ALTER TABLE `rasoidata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `rasoi_menu`
--
ALTER TABLE `rasoi_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `signupdata`
--
ALTER TABLE `signupdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
