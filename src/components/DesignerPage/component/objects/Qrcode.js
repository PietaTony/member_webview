import React from 'react';
import QRCode from 'qrcode.react';

import Icon from '../Icon';
import Vector from './Vector';

export default class Qrcode extends Vector {
  static meta = {
    icon: <Icon icon={'qrcode'} size={30} />,
    initial: {
      value: 'http://www.baidu.com/',
    },
  };

  render() {
    const { object } = this.props;
    return <QRCode {...this.getObjectAttributes()} value={object.value} />;
  }
}
