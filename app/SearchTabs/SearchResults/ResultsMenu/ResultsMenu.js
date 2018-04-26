ResultsMenu({
	share: 'results',
  selected: "",
  menu: [
    { id: "files", name: "Files" },
    { id: "file-contents", name: "File Contents" },
    { id: "notes", name: "Notes" },
    { id: "webpages", name: "Webpages" },
    { id: "images", name: "Images" }
  ],
  render() {
    <div class="card">
      <table
        class="table table-sm table-hover resultsMenu"
      >
        <tbody>
          <tr b="repeat: menu, class: { table-primary: selected === repeatObject.id }, click: selected(repeatObject.id)">
            <td b="text: repeatObject.name" />
          </tr>
        </tbody>
      </table>
    </div>;
  }
});
