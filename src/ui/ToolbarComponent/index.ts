import { Button } from "../ButtonComponent";
import { IContainerPosition } from "../UIManager";
import { Components } from "../../core/Components";
import { SimpleUIComponent } from "../SimpleUIComponent";

interface IToolbarOptions {
  name?: string;
  position?: IContainerPosition;
  id?: string;
}

type IToolbarDirection = "horizontal" | "vertical";

export class Toolbar extends SimpleUIComponent<HTMLDivElement> {
  name: string;
  children: Button[] = [];
  parent?: Button;

  static Class = {
    Base: "flex shadow-md w-fit h-fit gap-x-2 gap-y-2 p-2 text-white rounded pointer-events-auto bg-ifcjs-100 z-50 backdrop-blur-md",
  };

  private _position!: IContainerPosition;

  set visible(visible: boolean) {
    this._visible = visible && this.hasElements;
    if (visible && this.hasElements) {
      this.domElement.classList.remove("hidden");
      this.onVisible.trigger(this.get());
    } else {
      this.domElement.classList.add("hidden");
      this.onHidden.trigger(this.get());
    }
  }

  get visible() {
    return this._visible;
  }

  set enabled(enabled: boolean) {
    this.closeMenus();
    this.children.forEach((button) => {
      button.enabled = enabled;
      button.menu.enabled = enabled;
    });
    this._enabled = enabled;
  }

  set position(position: IContainerPosition) {
    this._position = position;
    this.updateElements();
  }

  get position() {
    return this._position;
  }

  constructor(components: Components, options?: IToolbarOptions) {
    const _options: IToolbarOptions = {
      position: "bottom",
      ...options,
    };
    const toolbar = document.createElement("div");
    toolbar.className = Toolbar.Class.Base;
    super(components, toolbar, options?.id);
    this.name = _options.name ?? "Toolbar";
    this.position = _options.position ?? "bottom";
    this.visible = true;
  }

  dispose(onlyChildren = false) {
    this.children.forEach((button) => button.dispose());
    if (!onlyChildren) {
      this.domElement.remove();
    }
  }

  get hasElements() {
    return this.children.length > 0;
  }

  get(): HTMLDivElement {
    return this.domElement;
  }

  addChild(...button: Button[]) {
    button.forEach((btn) => {
      btn.parent = this;
      this.children.push(btn);
      this.domElement.append(btn.domElement);
    });
    this._components.ui.updateToolbars();
  }

  updateElements() {
    this.children.forEach((button) => (button.parent = this));
  }

  closeMenus() {
    this.children.forEach((button) => button.closeMenus());
  }

  setDirection(direction: IToolbarDirection = "horizontal") {
    this.domElement.classList.remove("flex-col");
    const directionClass = direction === "horizontal" ? ["flex"] : ["flex-col"];
    this.domElement.classList.add(...directionClass);
  }
}
