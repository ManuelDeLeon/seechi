SearchResults({
  share: "results",
  render() {
    <div class="row">
      <div class="col" style="flex: 0 0 200px;">
        <ResultsMenu />
      </div>
      <div class="col">
        <ResultsFiles b="if: selected === 'files'" />
      </div>
    </div>;
  }
});
