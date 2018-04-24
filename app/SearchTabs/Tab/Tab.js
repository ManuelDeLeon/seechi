Tab({
  share: {
    search: "search"
  },
  id: 0,
  text: "",
  displayText() {
    if (this.search.default().id === this.id()) {
      return this.search.default().text;
    } else if (this.id() === this.search.activeId()) {
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
        b="text: displayText, class: { active: active }, click: activate"
        class="nav-link"
        href="#"
      />
    </li>;
  }
});
