
import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WelcomeScene')
export class WelcomeScene extends Component {

    private progressBar: Node|null = null;
    onLoad() {
        console.log("WelcomeScene onload---------");
        this.progressBar = this.node.getChildByName("ProgressBar");
        this.progressBar.active = false;
    }
    start () {
        
    }

}

