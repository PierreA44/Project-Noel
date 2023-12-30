CREATE TABLE `category` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

CREATE TABLE `manufacturer` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `production_country` VARCHAR(150) NOT NULL
);

CREATE TABLE `product` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `quantity` INT NOT NULL,
  `price` INT NOT NULL,
  `is_fav` BOOLEAN NOT NULL DEFAULT 0,
  `category_id` INT NOT NULL,
  `manufacturer_id`INT NOT NULL,
  FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE CASCADE,
  FOREIGN KEY(manufacturer_id) REFERENCES manufacturer(id) ON DELETE CASCADE
);
