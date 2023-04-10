
import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const TYPE = "Rectangle";
export const behavior = {
  customDisplayObject: props => new PIXI.Graphics(),
  customApplyProps: function(instance, oldProps, newProps) {
    const { fill, x, y, width, height } = newProps;
    // instance.clear();
    // instance.beginFill(fill);
    // instance.drawRect(x, y, width, height);
    // instance.endFill();

    instance.clear();
    // 0xff3300
    instance.beginFill(0xff3300);
    instance.lineStyle(4, 0xffd900, 1);
    instance.moveTo(50, 50);
    instance.lineTo(250, 50);
    instance.lineTo(100, 100);
    instance.lineTo(50, 50);

    instance.endFill();
    instance.lineStyle(2, 0x0000ff, 1);
    instance.beginFill(0xff700b, 1);
    instance.drawRect(x, y, width, height);
    instance.lineStyle(2, 0xff00ff, 1);
    instance.beginFill(0xff00bb, 0.25);

    instance.drawRoundedRect(50, 100, 300, 100, 15);
    instance.endFill();

    instance.lineStyle(1);
    instance.beginFill(0xffff0b, 0.5);
    instance.drawCircle(470, 90, 60);
    instance.endFill();
  }
};
export default CustomPIXIComponent(behavior, TYPE);