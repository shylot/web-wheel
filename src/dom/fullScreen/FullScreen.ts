export default class FullScreen {
    private readonly dom: HTMLElement;

    constructor(dom?: HTMLElement) {
        this.dom = dom;
    }

    public toggle() {
        if (!document.fullscreenElement) {
            this.doFull();
        } else if (document.exitFullscreen) {
            this.doExit();
        }
    }

    public doFull() {
        const dom: any = this.dom || document.documentElement;
        dom.requestFullscreen();
    }

    public doExit() {
        document.exitFullscreen();
    }
}
