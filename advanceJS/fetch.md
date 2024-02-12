# let me explain how fetch API work behind the secne

## fetch API

```javascript
 const resp = fetch(url);
```
### Explaintion 

#### when we call the fetch API, It two main instanc work behind the secne, one the memory location which is call any name, this first instnace have two array, these array have a own function
#### data :-
- on fulfiled []
- on Rejection [];

#### the second instance is work with browser, who is send the network request, because we cna access the network request directly so requied a mediator ans this browser work like that, after getting the response if no error get the data then it send to on fulfiled array or if get the error then it send to the on rejection array 

#### After get the result what ever send to the "resp variable" who is define above, this is responsiblity by the function in on fulfiled or on rejection array 

### Note
for bettor reference [click here]("https://youtu.be/Rive84an6Lc?si=5sNs5JQ79VqyNsKV")