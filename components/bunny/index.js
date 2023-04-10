
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const bunny = "https://i.imgur.com/IaUrttj.png";

function Bunny(props) {
  return (
    <Sprite anchor="0.5,0.5" texture={PIXI.Texture.from(bunny)} {...props} />
  );
}

export default Bunny;