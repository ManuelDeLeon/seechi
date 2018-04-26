Tab({
  share: {
    search: "search"
  },
  id: 0,
  text: "",
  hovering: false,
  removeHover: false,
  removeColor() {
    return this.removeHover() ? "red" : "lightgray";
  },
  displayText() {
    if (this.id() === this.search.activeId()) {
      return this.search.activeText();
    } else {
      return this.text();
    }
  },
  active() {
    return this.id() === this.search.activeId();
  },
  activate() {
    this.search.activeId(this.id());
  },
  render() {
    <li class="nav-item">
      <a
        b="hover: hovering, class: { active: active }, click: activate"
        class="nav-link"
        href="#"
      >
        <span b="text: displayText" />
        <i
          class="fa fa-times"
          b="hover: removeHover, style: { color: removeColor }, click: search.remove(id), class: { fa-times-circle: removeHover }"
          style="margin-left: 12px;"
        />
      </a>
    </li>;
  }
});
