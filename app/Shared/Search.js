import ViewModel from "viewmodel-react";
let idCount = 0;
ViewModel.share({
  search: {
    list: [],
    activeId: ViewModel.property.integer.beforeUpdate(function(newValue) {
      const oldId = this.activeId();
      if (oldId !== 0) {
        const search = this.list().find(l => l.id === oldId);
        if (search) {
          search.text = this.activeText();
        }
      }
      if (newValue === 0) {
        this.activeText.reset();
      } else {
        const nextSearch = this.list().find(l => l.id === newValue);
        if (nextSearch) {
          this.activeText(nextSearch.text);
        }
      }
    }),
    activeText: ViewModel.property.string.beforeUpdate(function(newValue) {
      if (newValue !== "") {
        const activeId = this.activeId();
        if (activeId === 0 && !this.list().find(l => l.text === newValue)) {
          idCount++;
          this.activeId(idCount);
          this.list().unshift({ id: idCount, text: newValue });
        }
      }
    }),
    default: {
      id: 0,
      text: "+"
    },
    remove(id) {
      this.activeId(0);
      const index = this.list().findIndex(e => e.id === id);
      this.list().splice(index, 1);
    }
  }
});
