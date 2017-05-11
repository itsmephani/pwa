(function() {
  
  function Notes(element, index) {
    this.element = element;
    this.elementIndex = index;
    // Contenteditable doesn't going well with notes tag.
    this.notesEditor = document.createElement('div');
    this.notesEditor.setAttribute('contenteditable', true);
    this.notesEditor.classList.add('notes__editor');
    this.element.appendChild(this.notesEditor);
    this.notes = '';

    if (localStorage.getItem(this.getLocalStorageKey_())) {
      this.notes = localStorage.getItem(this.getLocalStorageKey_());
      this.notesEditor.textContent = this.notes;
    } else {
      this.notesEditor.textContent = this.element.getAttribute('placeholder');
    }

    // Bind events.
    this.notesEditor.addEventListener('input', this.takeNotes.bind(this));
  }

  Notes.prototype.takeNotes = function() {
    let textContent = this.element.textContent;
    this.notes = textContent;
    localStorage.setItem(this.getLocalStorageKey_(), this.notes);
    // Show placeholder if content is empty.
    if (!this.notes) {
      this.notesEditor.textContent = this.element.getAttribute('placeholder');
    } 
  };

  Notes.prototype.getLocalStorageKey_ = function() {
    return 'notes_' + this.elementIndex;
  };


  document.addEventListener('DOMContentLoaded', function(event) {
    Array.from(document.querySelectorAll('notes')).forEach((element, index) => {
      new Notes(element, index);
    });
  });
})();