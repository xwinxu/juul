#!/usr/bin/env python

import serial.tools.list_ports
print([port for port in serial.tools.list_ports.comports() if port[2] != 'n/a'])

# import serial.tools.list_ports
reslt = serial.tools.list_ports.comports()
# print(serial.tools.list_ports.ListPortInfo.name)

# import serial as ser
# import serial.tools.list_ports as prtlst

# global COMs
# COMs=[]
# def getCOMs():
#     global COMs
#     pts= prtlst.comports()

#     for pt in pts:
#         if 'USB' in pt[1]: #check 'USB' string in device description
#             COMs.append(pt[0])

# if __name__ == '__main__':
    # getCOMs()
    # while True:
    #     x = input()

