chorder.js
----------
This library will help you to create dynamic forms.

## Installation
Two possible options:
* Include the ```dist/chorder.js```
    ```html
    <script src="assets/js/chorder/dist/chorder.js"></script>
    <script>
        const chorder = new Chorder
        chorder.init()
    </script>
    ```
* With **npm** and **webpack**
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