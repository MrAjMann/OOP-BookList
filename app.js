// Book Constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create a TR element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="" class='delete'>X</a></td>
  `;
  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  // Add Classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get Form
  form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);

  // Time out after 3s
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
};
// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};
// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  // Instatiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error Alert
    ui.showAlert('PLease fill in all fields', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);

    // Show Success
    ui.showAlert('Book Added', 'success');
    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
