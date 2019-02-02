chorder.js
----------
This library will help you to create dynamic forms.

## Installation
Two possible options:
* Include the ```dist/chorder.js```:

    ```html
    <script src="assets/js/chorder/dist/chorder.js"></script>
    <script>
        const chorder = new Chorder
        chorder.init()
    </script>
    ```
* With **npm** and **webpack**:

    ```cmd
    $ npm i chorder
    ```
    ```js
    import Chorder from 'chorder'

    const chorder = new Chorder
    chorder.init()
    ```

## Guide
1. You will need a container div with an ```cd``` attribute with the inputs collection name.
2. Inside the div, it's required 2 another divs: one with ```cd-data``` attribute, indicating where the fields will be inserted and another with ```cd-template``` with the field template.
3. Each field will contain ```data-cd-name``` with the field name and ```cd-field``` indicating that it's a field.
4. Also, it's required an add button. The button must have the attribute ```cd-add```.

## How data can be sent
The form can be sent normally, without JavaScript interference, beacause every field has the array format in the name.

### Getting data
The method ```getData``` returns the field collection data as an object. It will facilitate requests via AJAX.

 See in the example below the fields template
```html
<div cd="products">
...
    <input type="text" placeholder="Name" data-cd-name="Name" cd-field>
    <input type="number" placeholder="Price" data-cd-name="price" cd-field>
...
</div>
```
and the data getting
```js
chorder.getData('products')
{
  {
    name: "TV",
    price: "999"
  },
  {
    name: "Cellphone",
    price: "499"
  }
}
```

## Example
```html
<div cd="products" data-initial-number="3">
    <div cd-data></div>

    <div cd-template>
        <div class="field row">
            <div class="col-sm-10">
                <input type="text" class="form-control" data-cd-name="name" placeholder="Name" cd-field>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-danger" cd-remove><i class="fas fa-times"></i></button>
            </div>
        </div>
    </div>

     <div class="row">
        <div class="col-sm-12">
            <button class="btn btn-success" cd-add><i class="fas fa-plus"></i></button>
        </div>
    </div>
</div>
```
