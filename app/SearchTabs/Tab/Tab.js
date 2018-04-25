Tab({
  share: {
    search: "search"
  },
  id: 0,
	text: "",
	hovering: false,
	showRemove() {
		return this.hovering() && this.search.default().id !== this.id();
	},
	removeHover: false,
	styles() {
		return { remove: { color: this.removeHover() ? "red" : "gray", 'font-size': this.removeHover() ? "medium" : "x-small" } };
	},
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
      <a b="hover: hovering, class: { active: active }, click: activate" class="nav-link" href="#">
        <span b="text: displayText" />
				<i 
					b="if: showRemove, hover: removeHover, style: styles.remove, click: search.remove(id)" 
					class="fa fa-remove" 
					style="margin-left: 10px; line-height: 21px" />
      </a>
    </li>;
  }
});
