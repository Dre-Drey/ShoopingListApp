# FizzUp exercice

## Instruction

Create a shoppingListApp which :

- receives an initial list of items, each one with name and quantity ;
- returns an ordered list (most to less quantity), with a list item for each shopping item ;
- allows to increment and decrement the item quantity ;
- removes the item if the quantity drops to zero ;
- allows you to add new items at the end of the list with a form where the name input should nicely replace non-ASCII characters with appropriate ASCII characters upon typing.

Additionally, draft inputs are saved locally on the browser and survive to a page refresh

## Realization

About 2 hours.

### ShoppingListApp

I started by creating a ShoppingListApp component that takes in state the initial list of items. This list is passed in props in the _ShoppingListItems_ component, then the quantity and name values are passed in props in the _ShopppingListItem_ component.

It is also in this component that we find **two important functions**:

- **const updateQuantity** : allows to increment and decrement the quantity of each item. It takes in parameter an index and the increment, and passes in props in _ShoppingItems_, and then with the adequate increment in _ShoppingItem_.

- **const onAddItem** : allows to add items and their quantity in the form. It passes in props in the component _Form_.

This component returns two components: _ShoppingItems_ and _Form_.

#### ShoppingListItems

This component takes in props our list of items initiated in state in _ShoppingListApp_ and the **updateQuantity** function and returns the sorted list of items (function .sort()) and for each item (function .map()) the _ShoppingItem_ component by passing in props the name and the quantity of each item of the list.

##### ShoppingItem

The last child component receives 4 props : the name and the quantity of each item, and the two functions that allow to manage the quantity (increment and decrement).
A condition set the rendering of the item in this component : its quantity must be higher than 0.
The component returns the name of the item and the quantity framed by two <buttons> that call the **increment** and **decrement** functions of the quantity when clicked.

#### Form

The form is the 2nd component returned by _ShoppingListApp_. It only takes the function of **adding an item** and initiates in state the name ({inputText}) and the quantity ({inputQuantity} set to 1) of each item added in the <input> (value={})
The localstorage is managed in this component thanks to the useEffect hook that sets the item with a key (name and quantity) and a value (input) each time converted into JSON value (JSON.stringify)
Some functionalities have been added in the form and the html <inputs> : the **preventdefault** to avoid searching the page, the inputs are mandatory (required), the user-friendly interface (with a placeholder and a number for the quantity).

It is in the **onChange** function of each input that the transformation of the inputs in ascii character is managed thanks to a given function (link in comment).

## Improvements

With more time, I think we can improve the app on many levels:

- the design: the css and is currently minimal;
- accessibility : html and css don't take accessibility into account (aria label, etc.)
- the features : the items could be classified in categories ;
- the code : a usecontext could be used to make the states global and not to pass them in props to each component ; the local storage could possibly be treated by creating a specific hook.
