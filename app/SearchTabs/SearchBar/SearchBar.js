SearchBar({
  share: {
    search: "search"
  },
  autorun() {
    this.search.activeId.depend();
    this.input.focus();
  },
  render() {
    <form style="margin-top: 10px">
      <div class="form-group">
        <input b="value: search.activeText, ref: input" type="text" class="form-control form-control-sm" />
      </div>
    </form>;
  }
});
