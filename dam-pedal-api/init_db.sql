USE damp_db;

CREATE TABLE  effect (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(2048),
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE effect_parameter (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    range_low FLOAT DEFAULT 0.0,
    range_high FLOAT DEFAULT 1.0,
    effect_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (effect_id) REFERENCES effect (id)
) ENGINE = InnoDB;

CREATE TABLE chain (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(2048) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE chain_effect (
    id INT NOT NULL AUTO_INCREMENT,
    chain_id INT NOT NULL,
    effect_id INT NOT NULL,
    pos INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (pos, chain_id),
    FOREIGN KEY (effect_id) REFERENCES effect (id),
    FOREIGN KEY (chain_id) REFERENCES chain (id)
) ENGINE = InnoDB;

CREATE TABLE chain_effect_parameter ( 
    id INT NOT NULL AUTO_INCREMENT,
    c_e_id INT NOT NULL,
    intial FLOAT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (c_e_id) REFERENCES chain_effect (id)
) ENGINE = InnoDB;

CREATE TABLE scene (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(2048),
    author VARCHAR(255) DEFAULT 'Unnamed',
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE scene_chain (
    id INT NOT NULL AUTO_INCREMENT,
    scene_id INT NOT NULL,
    chain_id INT NOT NULL,
    pos INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (pos, scene_id),
    FOREIGN KEY (scene_id) REFERENCES scene (id),
    FOREIGN KEY (chain_id) REFERENCES chain (id)
) ENGINE = InnoDB;

CREATE TABLE scene_bindings (
    id INT NOT NULL AUTO_INCREMENT,
    scene_id INT NOT NULL,
    chain_id INT NOT NULL,
    parameter INT NOT NULL,
    knob INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (scene_id) REFERENCES scene (id),
    FOREIGN KEY (chain_id) REFERENCES chain (id),
    FOREIGN KEY (parameter) REFERENCES chain_effect_parameter (id)
) ENGINE = InnoDB; 


