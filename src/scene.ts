export interface SceneObject{
    init();
    run();
    destroy();
}

export class Scene {
    objects: SceneObject[] = [];

    constructor() {

    }

    run() {

    }

    destructor() {

    }
}
