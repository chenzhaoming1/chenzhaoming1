
import { _decorator, Component, Node, Button, SpriteFrame, find } from 'cc';
const { ccclass, property } = _decorator;
import { Dialog } from './Dialog';
import { ResMgr } from './ResMgr';
@ccclass('GameApp')
export class GameApp extends Component {
    onLoad() {
        // console.log("GameApp onload---------");
        this.node.addComponent(Dialog);
        this.node.addComponent(ResMgr);
    }
    start () {
        this.GameStart();
        // this.node.on(Node.EventType.TOUCH_START, (event:any) => {
        //     console.log("GameApp node  TOUCH_START");
        //   }, this);
        
        let canvas = find("Canvas");
        let red_button = canvas.getChildByName("Button"); 
        // find("Button");
        red_button.on(Button.EventType.CLICK, this.clickCallback, this);
        // var click_event = new Component.EventHandler();
        // click_event.target = this.node;
        // click_event.component = "组件名";
        // click_event.handler = "on_red_btn_click";
        // 　　click_event.customEventdata = "穿的参数";
// },
    }

    public GameStart() {
        var resPkg = {
            resources: {
                assetType: SpriteFrame,
                urls: [
                    "default_sprite_splash/spriteFrame",
                    "query_bg/spriteFrame",
                ],
            },
        };

        ResMgr.Instance.preloadResPkg(resPkg, (now: number, total: number)=>{
            // var per = now / total;
            console.log("preloadResPkg call ", now, total);
            // if(this.progressBar !== null) {
            //     this.progressBar.fillRange = per;
            // }

        }, ()=>{
            // this.canvas?.destroyAllChildren();

            // 加载资源
            this.EnterLoginScene();
            // end 
        })

        
    }

    EnterLoginScene(){
        console.log("EnterLoginScene");
        let d = new Dialog;
        d.ShowDlg();
    }
    public enterScene(name : string) {

    }
    onTouchStart(){
        console.log("点击开始");
    }

    clickCallback (event: Button, data: any) {
        // this._label!.string = data;
        console.log("clickCallback");
    }
    callback (button: Button) {
        console.log("callback", button);
    }
}

