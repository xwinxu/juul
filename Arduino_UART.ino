#include <Servo.h>

Servo motor; 

int pos = 0;   

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ;
  }
  motor.attach(9); 
}

void loop() {
  char buffer[16];
  if (Serial.available() > 0) {
    int size = Serial.readBytesUntil('\n', buffer, 12);
    if (buffer[0] == 'Y') {
      motor.write(90);
    }    
    if (buffer[0] == 'N') {
      motor.write(0);
    }            
    delay(15);                      
  }
}
