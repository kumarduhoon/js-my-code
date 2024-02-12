# XMLHttpRequest
### XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disturbing what the user is doing.

### Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

```javascript
  XMLHttpRequest()
```
### The constructor initializes an XMLHttpRequest. It must be called before any other method calls. 

### This interface also inherits properties of "XMLHttpRequestEventTarget" and of "EventTarget".

### "XMLHttpRequest.readyState" :- Returns a number representing the state of the request.

### "XMLHttpRequest.response" :- Returns an "ArrayBuffer", a "Blob", a "Document", a JavaScript object, or a string, depending on the value of XMLHttpRequest.responseType, that contains the response entity body.

### "XMLHttpRequest.responseText" :- Returns a string that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.

### "XMLHttpRequest.responseType" Specifies the type of the response.

### "XMLHttpRequest.responseURL" :-  Returns the serialized URL of the response or the empty string if the URL is null.

### "XMLHttpRequest.status" :-  Returns the HTTP response status code of the request.

### "XMLHttpRequest.timeout" The time in milliseconds a request can take before automatically being terminated.
 
# XMLHttpRequest: readyState property

| value | state | Description |
| ----- | ----- | ----------- |
| 0     | unsend| Client has been created. open() not called yet.|
|  1    |opened |open() has been called.|
|  2    |HEADERS_RECEIVED |send() has been called, and headers and status are available.|
|  3    |Loading|Downloading; responseText holds partial data.|
|  4   | DONE  |The operation is complete.|


- open  => The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
```javascript
  open(method, url)
  open(method, url, async)
  open(method, url, async, user)
  open(method, url, async, user, password)
```
## How to send any post request in XMLHttpRequest

```javascript
// Create a new instance of XMLHttpRequest
var xhr = new XMLHttpRequest();

// Specify the request method as "POST" and the URL to which you want to send the request
var url = "https://example.com/api/endpoint";
xhr.open("POST", url, true);
// Set the appropriate headers
xhr.setRequestHeader("Content-Type", "application/json");

// Convert your data into JSON format
var data = {
    key1: "value1",
    key2: "value2"
};
var jsonData = JSON.stringify(data);

// Define a function to handle the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Request was successful, handle response here
            console.log(xhr.responseText);
        } else {
            // Handle error
            console.error('Request failed:', xhr.status);
        }
    }
};

// Send the request with the data
xhr.send(jsonData);





```




 ## Note
#### The above info is not a fully info about the all methods of the xmlHttpRequest if you want to study deeply about this then [click here ](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)