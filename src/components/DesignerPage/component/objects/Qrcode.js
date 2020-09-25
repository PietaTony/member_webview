import React from 'react';
// import QRCode from 'qrcode.react';

import Icon from '../Icon';
import Vector from './Vector';

export default class Qrcode extends Vector {
  static meta = {
    icon: <Icon icon={'qrcode'} size={30} />,
    initial: {
      width: 100,
      height: 100,
      // value: 'http://www.baidu.com/',
      // Just a simple base64-encoded outline
      xlinkHref:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhSURBVHgBtYmxDQAADII8lv9faBNH4yoJLAi4ppxgMZoPoxQrXYyeEfoAAAAASUVORK5CYII=',
    },
  };

  render() {
    const { object } = this.props;
    return (
      <image
        xlinkHref={object.xlinkHref}
        {...this.getObjectAttributes()}
        width={object.width}
        height={object.height}
      />
    );
    // return <QRCode {...this.getObjectAttributes()} value={object.value} />;
  }
}
