SearchBar({
  share: {
    search: "search"
  },
  autorun() {
    this.search.activeId.depend();
    this.input.focus();
  },
  render() {
    <form>
      <div class="form-group">
        <input
          b="value: search.activeText, ref: input"
          type="text"
          class="form-control"
          placeholder="What do you want to search?"
        />
      </div>
    </form>;
  }
});
