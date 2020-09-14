export const TypeList = {
  LED: ['C71', 'POS', 'GROUP', 'Action', 'UUID', 'STU'],
  PUMP: ['C72', 'POS', 'GROUP', 'Action', 'UUID', 'STU'],
  AIRFAN: ['C73', 'POS', 'GROUP', 'Action', 'UUID', 'STU'],
  GROUP: ['C74', 'POS', 'GROUP', 'Action', 'UUID'],
  UV: ['C75', 'POS', 'GROUP', 'Action', 'UUID', 'STU'],
  CO2: ['C76', 'POS', 'GROUP', 'Action', 'UUID'],
  TEMPERATURE: ['C77', 'POS', 'GROUP', 'Action', 'UUID'],
  RH: ['C78', 'POS', 'GROUP', 'Action', 'UUID'],
  WATERLEVEL: ['C79', 'POS', 'GROUP', 'Action', 'UUID'],
  ELECTRONS: ['C7A', 'POS', 'GROUP', 'Action', 'UUID'],
  PH: ['C7B', 'POS', 'GROUP', 'Action', 'UUID'],
  PWM: ['C7C', 'POS', 'GROUP', 'Action', 'UUID'],
  SETTIME: ['C7D', 'POS', 'GROUP', 'Action', 'UUID', 'STU'],
  AUTO: ['C7E', 'POS', 'GROUP', 'Action', 'UUID', 'STU'],
};

export const TypeClass = {
  Other: '00',
  Base: '01',
  Model: '02',
  Auto: '03',
};

export const BaseComponents = [
  {
    TYPESN: 'GROUP',
    TYPECLASS: '01',
    JDATA: { C74: { sub: 0, stu: 0, Data: 0 } },
  },
  {
    TYPESN: 'UV',
    TYPECLASS: '01',
    JDATA: { C75: { sub: 0, stu: 0, Data: 0 } },
  },
];

export const TestData = {
  TYPESN: 'N001',
  TYPECLASS: '02',
  JDATA: {
    STATU: { devadd: '0x04', LINK: 1, GROUP: 0 },
    C77: { sub: 0, stu: 0, Data: 0 },
    C78: { sub: 0, stu: 0, Data: 0 },
  },
};
