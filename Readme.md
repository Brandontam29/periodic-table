# React/Django Takehome

The goal of this takehome is to show basic proficiency with a web framework used at Nanoacademic. It should not take longer than 1-2 hours. The project should preferably be completed with React or Django (Django templates). If you are not comfortable with either, you can use vanilla html/js or another python framework (e.g. with jinja templates). Please contact the Nanoacademic team member if you have any questions.

## Table of contents

- [The rules](#the-rules)
- [The challenge](#the-challenge)
- [The requirements](#the-requirements)
- [Notes](#notes)
- [Examples](#examples)

## The rules

- Read and understand [The challenge](#the-challenge)
- Create solutions that satisfy [The requirements](#the-requirements)
- Send us a link to the repository containing your solution once you are done

## The challenge

Build a periodic table that displays the symbol, atomic number, and name of the first 54 elements in the proper order and layout. The layout does not require domain knowledge (see notes). You will also create a detail view that shows all information provided by the api for a specific element.

## The requirements

- Call the api "https://periodic-table-elements-info.herokuapp.com/elements"
- Backend capable technologies should store the json in a cache or save it to the database. Frontend should save it to browser storage.
- Create a main page view that displays the **first 54 elements** of the periodic table. Elements should show Atomic number, symbol, and name.
- Fix the error in the API if it still exists. Adjust boron to have period 2 (so that it is on row 2).
- Create a detail view that shows all information for that element.
- Display the detail view on clicking an element. The detail view should be shown on the same page or in a new page. New pages should include a back button to the main periodic table.
- Include a Readme with instructions to run your project. You may assume the reader has npm and/or python installed. (hint: include a package.json or requirements.txt)


## Notes

- The design does not have to match the examples perfectly.
- You are free to use a UI library
- The period corresponds to the row
- The group corresponds to the column
- The color coding can be gotten from the cpkHexColor field
- Boron's period is wrong. Adjust it's period to be 2.
- A backup of the json is included if there is an issue with the API.

## Examples

The below assets have been provided to help complete the challenge.

| Name                                      | Description                    |
| ----------------------------------------- | ------------------------------ |
| [main_page.png](assets/main_page.png)     | Sketch of the periodic table   |
| [detail_page.png](assets/detail_page.png) | Sketch of possible detail page |
