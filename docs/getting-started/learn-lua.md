---
id: learn-lua
title: Learning Lua
---

> Note: This is a very basic lua tutorial to get you familiar with NvChad config

## Printing
```lua
print("Hi")
```

## Comments
```lua
-- a comment
print("hi") -- another comment
```

## Variables

```lua
-- Different types
local x = 10 -- number
local name = "Sid" -- string
local isAlive = true -- boolean
local a = nil --no value or invalid value
```

**Numbers**

```lua
-- examples
local a = 1
local b = 2

print(a + b) -- 3
```

```lua
-- increment
local level = 1
level = level + 1
print(level) -- 2
```

**Strings**
```lua
-- concatenate strings
local phrase = "I am"
local name = "Sid"
print(phase .. name) -- I am Sid

-- strings and numbers
local name = "NvChad"
print(name .. "v" .. 1.0) -- NvChad v1.0
````

**Boolean**
```lua
local isAlive = true
print(isAlive) -- true

isAlive = false
print(isAlive) -- false
```

**Comparison Operators**
- == equality
- < less than
- \> greater than
- <= less than or equal to
- \>= greater than or equal to
- ~= inequality

## Conditional Statements
```lua
-- number comparisions
local age = 10

if age > 18 then
  print("over 18") -- this will not be executed
end

-- elseif and else
age = 20

if age > 18 then
  print("over 18")
elseif age == 18 then
  print("18 huh")
else
  print("kiddo")
end
```

```lua
-- boolean comparision
local isAlive = true

if isAlive then
    print("Be grateful!")
end

-- string comparisions
local name = "sid"

if name ~= "sid" then
  print("not sid")
```

**Combining Statements**
```lua
local age = 22

if age == 10 and x > 0 then -- both should be true
  print("kiddo!")
elseif x == 18 or x > 18 then -- 1 or more are true
  print("over 18")
end

--result: over 18 
```

**Invert Value**

you can also invert a value with the **not** keyword
```lua
local x = 18

if not x == 18 then
  print("kiddo!")
end
```

## Functions
```lua
function num(a)
  print(a)
end

or 

local num = function(a) 
  print(a)
end

num(5)

-- result : 5
```

```lua
-- multiple parameters

function sum(a + b)
  local result = a + b
  print(result)
end
```

## Scope
Variables have different scopes. Once the end of the scope is reached the values in that scope are no longer accessable
```lua
function foo()
  local n = 10
end

print(n) -- nil , n isnt accessable outside foo()
```
## Loops
Different ways to make a loop
```lua
-- while loop
local i = 0

while i <= 3 do
   print("hi")
   i = i + 1
end

OR

--for loop
for i = 0, 3 do
   print("hi")
   i = i + 1
end

-- result 
hi  
hi  
hi
```

## Tables

```lua
-- basic table
local colors = { "red", "green", "blue" }

print(colors[1]) --red
print(colors[2]) --green
print(colors[3]) --blue

-- use a loop to iterate though the table
for i=1, #colors do
  print(colors[i])
end
```

**Two Dimensional Table**

```lua
--tables within tables
local data = {
    { "billy", 12 },
    { "john", 20 },
}

for i = 1, #data do
  print(data[i][1] .. " is " .. data[i][2] .. " years old")
end
```

## Modules

Include code other files
```lua
require("otherfile")
```

- Credits - Modified version of this [guide](https://github.com/pohka/Lua-Beginners-Guide)
