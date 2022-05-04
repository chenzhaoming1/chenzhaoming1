
import { Component, Layers, UITransform, view, director, Sprite, SpriteFrame, resources, find, 
    Node, Size, color } from 'cc';
import { ResMgr } from './ResMgr';
export class Dialog extends Component {

    private bgSprite : Sprite = null;
    // private node : Node = null;
    onLoad(): void {
        // SpriteSplash
        // resources.load("default_sprite_splash.png", Texture2D, (err: any, texture: Texture2D) => {
        //     const spriteFrame = new SpriteFrame();
        //     spriteFrame.texture = texture;
        //     this.node.getComponent(Sprite).spriteFrame = spriteFrame;
        // });
        // bundle1.get('music/hit', cc.AudioClip);
        // console.log("Dialog onLoad -----------------");
        

        // this.canvas.addChild(node);
        // node.setPosition(0, 0, 0);
        // const sprite = node.addComponent(Sprite);
        // sprite.spriteFrame = getSpriteFrame('sheep_down_0');

        // this.bgSprite = new Sprite();
        // let scene = director.getScene();
        // node.spriteFrame = new SpriteFrame("default_sprite_splash.png");
        // // sprite.spriteFrame = new cc.SpriteFrame(tex);
        // scene.addChild(this.sprite);
        // this.sprite. = scene;
        // this.sprite.setPosition(0, 0);
    }
    ShowDlg(): void {
        // resources.load("default_sprite_splash/spriteFrame", SpriteFrame, (err: any, spriteFrame: SpriteFrame) => {
        //     if(err) {
        //         console.log("[load]: " + err);
        //         return;
        //     }
        //     const node = new Node();
        //     node.layer = Layers.Enum.UI_2D
        //     const sp = node.addComponent(Sprite);
        //     sp.spriteFrame = spriteFrame;
        //     sp.color = color(255, 255, 255, 50);
        //     const size = view.getVisibleSize() as Size;
        //     const uiTrans = node.getComponent(UITransform)!;

        //     uiTrans.setContentSize(size.width-10, size.height-100);

        //     // scene.addChild(node);
        //     node.setPosition(0, 0);
        //     let canvas = find("Canvas");
        //     canvas.addChild(node);
        //     // scene.addChild(node);
        //     // console.log("create ShowDlg -----------------",size.width);
        //     node.on(Node.EventType.TOUCH_START, (event:any) => {
        //         console.log("Dialog  TOUCH_START");
        //       }, this);
        // });
        {
            let spriteFrame = ResMgr.Instance.getAsset("resources", "default_sprite_splash/spriteFrame");
            const node = new Node();
            node.layer = Layers.Enum.UI_2D
            const sp = node.addComponent(Sprite);
            sp.spriteFrame = spriteFrame;
            sp.color = color(255, 255, 255, 255);
            const size = view.getVisibleSize() as Size;
            const uiTrans = node.getComponent(UITransform)!;

            uiTrans.setContentSize(size.width-10, size.height-100);

            // scene.addChild(node);
            node.setPosition(0, 0);
            let canvas = find("Canvas");
            canvas.addChild(node);
            // scene.addChild(node);
            // console.log("create ShowDlg -----------------",size.width);
            node.on(Node.EventType.TOUCH_START, (event:any) => {
                console.log("Dialog  TOUCH_START");
              }, this);
        }
        // let t = resources.get("default_sprite_splash.png", Texture2D);
        let spriteFrame = ResMgr.Instance.getAsset("resources", "query_bg/spriteFrame");
        const node = new Node();
        node.layer = Layers.Enum.UI_2D
        const sp = node.addComponent(Sprite);
        sp.spriteFrame = spriteFrame;
        node.setPosition(0, 0);
        let canvas = find("Canvas");
        canvas.addChild(node);
        // sp.color = color(255, 255, 255, 50);
        // const size = view.getVisibleSize() as Size;
        // const uiTrans = node.getComponent(UITransform)!;
    }
}
