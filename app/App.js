const sqlite3 = require("sqlite3").verbose();

App({
  created() {
    let db = new sqlite3.Database("seechi.db", err => {
      if (err) {
        console.error(err.message);
      }
      console.log("Connected to the seechi database.");
    });
  },
  render() {
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Header />
      </div>
    </div>
  </div>;
  }
});
