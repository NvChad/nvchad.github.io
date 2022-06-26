## Print

```lua
print("Hi")
```

## Comments

```lua
-- comment
print("Hi") -- comment

--[[
 multiline 
 comment
]]
```

## Variables

```lua
-- Different types
local x = 10 -- number
local name = "sid" -- string
local isAlive = true -- boolean
local a = nil --no value or invalid value
```

**Numbers**

```lua
-- Examples
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
-- Concatenate strings
local phrase = "I am"
local name = "Sid"
print(phrase .. " " .. name) -- I am Sid

--or
print("I am " .. "Sid")
```

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
-- Number comparisons
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
-- Boolean comparison
local isAlive = true

if isAlive then
    print("Be grateful!")
end

-- String comparisons
local name = "sid"

if name ~= "sid" then
  print("not sid")
end
```

**Combining Statements**

```lua
local age = 22

if age == 10 and x > 0 then -- both should be true
  print("kiddo!")
elseif x == 18 or x > 18 then -- 1 or more are true
  print("over 18")
end

-- result: over 18
```

**Invert Value**

you can also invert a value with the **not** keyword

```lua
local x = 18

if not x == 18 then
  print("kiddo!") -- prints nothing as x is 18
end
```

## Functions

```lua
local function num(a)
  print(a)
end

or

local num = function(a)
  print(a)
end

num(5) -- prints 5 
```

```lua
-- multiple parameters

function sum(a, b)
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

print(n) -- nil , n isn't accessible outside foo()
```

## Loops

Different ways to make a loop

### While 
```lua
local i = 0

while i <= 3 do
   print("hi")
   i = i + 1
end
```

### For
```
for i = 0, 3 do
   print("hi")
   i = i + 1
end
```
```
-- prints
hi
hi
hi
```

## Tables

```lua
-- Basic table
local colors = { "red", "green", "blue" }

print(colors[1]) -- red
print(colors[2]) -- green
print(colors[3]) -- blue

-- Use a loop to iterate though the table
for i = 1, #colors do
  print(colors[i])
end
```

**Two Dimensional Table**

```lua
-- Tables within tables
local data = {
    { "billy", 12 },
    { "john", 20 },
}

for i = 1, #data do
  print(data[i][1] .. " is " .. data[i][2] .. " years old")
end
```
### Loop through tables  

#### Ipairs 

```lua
local names = { "sid", "tim", "lee" }

for index, value in ipairs(names) do
   print(names[index])
   -- or
   print(value)
end

-- If you dont use index or value here then you can replace it with _ 
for _, value in ipairs(names) do
   print(value)
end
```

#### Pairs

```lua
local details = {
   name = "sid",
   age = 20,
   distro = "void linux",
}

for key, value in pairs(details) do
   print(key .. value)
end
```

## Modules

Include code from other files

```lua
require("otherfile")
```

- Credits - [Lua-Beginners-Guide](https://github.com/pohka/Lua-Beginners-Guide)
- This tutorial is a modifed version of the above guide, shortened to teach lua stuff needed only to configure nvim in general
