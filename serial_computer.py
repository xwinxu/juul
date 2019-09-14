import serial

with serial.Serial('/dev/cu.usbmodem14401',9600,timeout=10) as ser:
	while True:
		motor_turn = input("Where do I turn it?")
		if motor_turn == '90':
			ser.write(bytes('YES\n','utf-8'))
		if motor_turn == '0':
			ser.write(bytes('NO\n','utf-8'))
