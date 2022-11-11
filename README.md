# todo_list

Things to do:
- change how todos appear, long ones are cut off and only show all text via click and drag on highlight

- order the todos by timestamp (when added) with latest entry at the top

- create tabs so you show only the todo entries for each project (programming or personal)
  - make sure when jumping between tabs, the todo entries for each project are still visible

- create more inputs to show:
  - priority level
    - add a flag icon next to edit/delete buttons with high/low color indicator 
  - dueDate
  - notes on the entry

- make the entries have an expand button which shows full todo details and can be closed upon click as well
  - test this out in HTML file first to make sure it works functionally before attempting in JS
  - will need another entry point for the additional inputs of each todo (inside the form tag)

- potentially create dynamic projects so that you can create other categories and again be able to add todos specifically to them so they're displayed when switching between tabs

- separate out logic into modules, one for DOM manipulation and another for application logic then export/import them into index.js