SearchTabs({
  share: {
    search: "search"
  },
  render() {
    <div>
      <ul class="nav nav-tabs">
        <NewTab />
        <Tab b="repeat: search.list, key: id" />
      </ul>
      <SearchBar />
      <SearchResults />
    </div>;
  }
});
