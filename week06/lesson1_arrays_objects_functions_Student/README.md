# Lesson 1: Arrays, Objects, and Functions

## Objective

Students will practice working with JavaScript arrays, objects, and functions by creating a quote manager. This lesson does not involve HTML or the DOM yet.

## Tasks

### 1. Define Data

- Create an array named `quotes`.
- Each quote should be an object with the following properties:
  - `id` (number)
  - `content` (string)
  - `author` (string)

### 2. Create Functions

#### `addQuote(quote)`

- Adds a new quote object to the `quotes` array.

#### `deleteQuote(id)`

- Removes the quote with the given `id` from the array.

#### `updateQuote(id, updatedQuote)`

- Updates the `content` and/or `author` of the quote with the given `id`.

#### `getAllQuotes()`

- Returns the current list of quotes.

### 3. Write Test Cases

- Add 3 sample quotes using `addQuote`
- Delete 1 quote using `deleteQuote`
- Update 1 quote using `updateQuote`
- Log all quotes using `getAllQuotes`

### 4. Expected Output Example

```text
Initial Quotes:
[
  { id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
]

After Deleting Quote with id 2:
[
  { id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
]

After Updating Quote with id 1:
[
  { id: 1, content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
]
```
