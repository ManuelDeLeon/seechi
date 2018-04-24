SearchTabs({
  share: {
    search: "search"
  },
  render() {
    <div>
      <ul class="nav nav-tabs">
        <Tab {...this.search.default()} />
        <Tab b="repeat: search.list, key: id" />
      </ul>

      <div class="tab-content" style="margin-top: 10px">
        <div class="tab-pane active">
          <SearchBar />
        </div>
      </div>
    </div>;
  }
});
