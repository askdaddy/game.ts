import {SceneObject} from "./scene";

export interface State{
    is_moving;
    direction;
    animation_tag;
}
export interface Point{
    x;
    y;
    z;
}

export class Element implements SceneObject{
    destroy() {
    }

    init() {
    }

    run() {
        this._do_move();
        this._do_dir_chk();
        this._do_anim();
    }

    protected _do_move(){
        this.state.is_moving = (this.moving_path.length>0);

        if(this.moving_path.length == 0) return;
        // TODO 处理运动队列:
        let next:Point = this.moving_path.shift();
        // drive obj to move with nextPoint
    }

    private _do_dir_chk(){
        // 根据2次移动点计算
        // 此方法不用被子类重写
        this.state.direction = 0;
    }
    protected _do_anim(){
        //TODO keep playing anim
        // 不同的子类对这个播放动画的行为可以自己重写
    }

    // 或 startMove
    public moveTo(p:Point[]){
        this.moving_path.push(...p);
    }

    public stop(){
        this.moving_path = [];
    }

    public get state(){
        return this.state;
    }

    state:State = new class implements State {
        animation_tag;
        direction;
        is_moving;
    }

    moving_path:Point[] = [];// 运动队列

}
