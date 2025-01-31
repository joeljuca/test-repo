CREATE TABLE service (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  salon_id BIGINT NOT NULL REFERENCES salon (id),
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
);

CREATE INDEX idx_service_name ON service (name);
CREATE INDEX idx_service_price ON service (price);