import React from 'react';
import Barcode from 'react-barcode';

import Icon from '../Icon';
import Vector from './Vector';

export default class BarCode extends Vector {
  static meta = {
    icon: <Icon icon={'barcode'} size={30} />,
    initial: {
      width: 2,
      height: 100,
      value: 'http://www.baidu.com/',
    },
  };

  render() {
    const { object } = this.props;
    return (
      <Barcode
        {...this.getObjectAttributes()}
        value={object.value}
        width={object.width}
        height={object.height}
      />
    );
  }
}
