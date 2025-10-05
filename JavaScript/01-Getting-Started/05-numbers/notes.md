# NumbersinJavaScript


NumbersinJavaScriptcanbe**positive, negative, orfractional**.


## StoringNumbers


```javascript

// Positive number

let positiveNumber = 1234;


// Negative number

let negativeNumber = -1234;


// Fractional number

let fractionalNumber = 12.34;

````

---

## NaN (Not a Number)

`NaN` is a special value in JavaScript which represents "Not a Number".

It occurs when an arithmetic operation is performed on a non-numeric value.

```javascript

letpersonID="ABC123";

console.log(personID*2); // NaN

```

---

## Increment and Decrement

We can **increase or decrease numbers by 1** using `++` and `--`.

```javascript

letnumber=5;


// Increment

number++; // Post-increment

++number; // Pre-increment


// Decrement

number--; // Post-decrement

--number; // Pre-decrement

```

### Pre-Increment vs Post-Increment

* **Pre-increment (++num)**: increases value before using it
* **Post-increment (num++)**: increases value after using it

```javascript

letnum=5;

console.log(++num); // 6 (pre-increment)

console.log(num++); // 6 (post-increment, then num becomes 7)

```

The same applies to `--` for decrementing.

---

## Getting the Remainder

The **modulus operator `%`** returns the remainder after division.

```javascript

letremainder=10%3;

console.log(remainder); // 1

```
