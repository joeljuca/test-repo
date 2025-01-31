CREATE TABLE appointment (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  service_id BIGINT NOT NULL REFERENCES service (id),
  customer_name VARCHAR(255) NOT NULL,
  scheduled_at TIMESTAMP NOT NULL
);

CREATE INDEX idx_appointment_customer_name ON appointment (customer_name);
CREATE INDEX idx_appointment_scheduled_at ON appointment (scheduled_at);
