const sqlite3 = require("sqlite3").verbose();

App({
  created() {
    // let db = new sqlite3.Database("seechi.db", err => {
    //   if (err) {
    //     console.error(err.message);
    //   }
    //   console.log("Connected to the seechi database.");
    // });
    // db.serialize(function() {
    // db.run("CREATE TABLE lorem (info TEXT)");
    // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    // for (var i = 0; i < 10; i++) {
    //   stmt.run("Ipsum " + i);
    // }
    // stmt.finalize();
    // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //   console.log(row.id + ": " + row.info);
    // });
    // db.run("CREATE VIRTUAL TABLE posts USING FTS5(title, body);", (error) => {
    //   console.log(error);
    // });
    //       db.run(
    //         `
    //       INSERT INTO posts(title,body)
    // VALUES('Learn SQlite FTS5','This tutorial teaches you how to perform full-text search in SQLite using FTS5'),
    // ('Advanced SQlite Full-text Search','Show you some advanced techniques in SQLite full-text searching'),
    // ('SQLite Tutorial','Help you learn SQLite quickly and effectively');
    //       `,
    //         (error) => {
    //           console.log(error);
    //         });
    //         db.each(`
    //         SELECT *
    // FROM posts
    // WHERE posts MATCH 'sqlite NOT text';
    //         `, function(err, row) {
    //         console.log(row.title + " - " + row.body);
    //       });
    //     });
    //     db.close();
  },
  render() {
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <SearchTabs />
        </div>
      </div>
    </div>;
  }
});
