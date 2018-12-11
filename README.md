# DrawingWithJavaScript
A JS Utility to make html canvas art

## Usage 
* Download the repo as zip
* Extract the files
* Open _index.html_
* Located and edit the _draw()_ function

To hide the grid, make sure to comment out the following line in _index.html_: 
```javascript
drawGrid();
```

To associate the grid with your canvas, make sure the variable __ is assigned the correct ID of your canvas, either by re-declaring it in _index.html_ or editing _canvasDrawJs.js_. For example: 
```javascript
var canvasID = "canvas"; 
```

To control the size of the grid, override the _size_ variable, either by re-declaring it in _index.html_ or editing _canvasDrawJs.js_. For example: 
```javascript
var size = 40;
```

To change the color of the grid, override the _gridColor_ variable, either by re-declaring it in _index.html_ or editing _canvasDrawJs.js_. For example
```javascript
var gridColor = "red";
```

## Example Output
After downloading the example, you should see the something similar to this: 
![DrawingWithJavaScriptExample1](img/example1.PNG)

To see the X,Y coordinates as you click the mouse, enable the console output. For example: 
![DrawingWithJavaScriptExample1](img/example2.PNG)

## More Info 
* You may darw using any canvas methods as listed at the [W3Schools Canvas Refrence](https://www.w3schools.com/graphics/canvas_reference.asp) 
