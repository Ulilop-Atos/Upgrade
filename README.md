### Atos - Upgrade 2022

# DRAW

Don't Recreate A Wheel (DRAW) is a initiative to generate a library of commonly used wed sections and plugins, publicly available, ready to implement, and customizables.

This initiative supports standardization, well use the term "Component" as used in the REACT library to refer to a section like a navigation bar, a hero section, a contact form, login form, sign up form, etc... 

## REACT

This is the standard directory tree of a DRAW project using REACT:

```bin
ProjectName/
├── public/
│   ├── index.html
│   ├── media/
│   │   ├── img/
│   │   │   └── ...
│   │   └── video/
│   │       └── ...
│   └── meta/
│   │   └── manifest.json
│   └── robots.txt
├── src/
│   ├── index.js
│   ├── App.jsx
│   ├── components/
│   │   ├── Component/
│   │   │   ├── index.js
│   │   │   ├── Component.jsx
│   │   │   ├── data/
│   │   │   ├── style/
│   │   │   ├── test/
│   │   │   └── ...
│   │   └── AnotherComponent/
│   │       └── ...
│   ├── data/
│   │   ├── img/
│   │   │   └── ...
│   │   ├── dummy.json
│   │   └── ...
│   ├── style/
│   │   ├── sass/
│   │   │   └── main.scss
│   │   ├── css/
│   │   │   └── main.min.css
│   │   └── fonts/
│   │       └── ...
│   └── test/
│       ├── App.test.js
│       └── ...
└── README.md
```

In a big React component you should also include folders for helpers and hooks, each in a subfolder with the name of the JS file. Please include the test file for the hook / helper inside that folder.

### CRUD
A CRUD is a visual interface for users to interact with a table.
A crud should perform the following operations given a request handler:

 Operation | Description
 --- | ---
get | Get information of all the records in a table
find | Find a record based on the record content
filter | Filter a the table based in one or more columns 
order | Order columns in ascending or descending order
create | Creates a new record
delete | Deletes a record
update | Update a record 
process | performs delete or update operations on multiple records 

***
## Ulises Lopez 

Application Developer

[victor-ulises.lopez@atos.net](mailto:(victor-ulises.lopez@atos.net))
***
Copyright © 2022 Atos SE