NewTab({
  share: {
    search: "search"
  },
  active() {
    return this.search.activeId() === 0;
  },
  activate() {
    this.search.activeId(0);
  },
  render() {
    <li class="nav-item">
      <a
        b="class: { active: active }, click: activate"
        class="nav-link"
        href="#"
      >
        <i class="fa fa-plus" style="font-size: 14px" />
      </a>
    </li>;
  }
});
