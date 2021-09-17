CREATE TABLE BUSINESS (
  id Long AUTO_INCREMENT PRIMARY KEY,
  business_name VARCHAR(250) NOT NULL,
  street_number Long NOT NULL,
  street_name VARCHAR(250) NOT NULL,
  city VARCHAR(250) NOT NULL,
  state VARCHAR(2) NOT NULL,
  ramp_present BIT,
  door_width_accessible BIT,
  steps_on_entry BIT,
  restroom_accessible BIT
);


INSERT INTO BUSINESS (business_name, street_number, street_name,
                        city, state, ramp_present, door_width_accessible,
                        steps_on_entry, restroom_accessible)
VALUES
  ('Test Business', '6', 'Magic St',
  'New York', 'NY', 'true',
  'false', 'true', 'false');

INSERT INTO BUSINESS (business_name, street_number, street_name,
                          city, state, ramp_present, door_width_accessible,
                          steps_on_entry, restroom_accessible)
VALUES
    ('Business', '100', 'Bronx Ave',
    'Bronx', 'NY', 'false',
    'true', 'false', 'false');

SELECT * from BUSINESS;