import{M as a}from"./index-eaa7d6c5.js";import{b as n,n as r}from"./entry-client-6243de9d.js";function l(e){const s=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3",p:"p",strong:"strong",ul:"ul",li:"li"},a(),e.components);return[n(s.h2,{children:"Comments"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-comment",children:"-- comment"}),`
`,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"Hi"'}),") ",n(s.span,{className:"hljs-comment",children:"-- comment"}),`

`,n(s.span,{className:"hljs-comment",children:`--[[
 multi-line 
 comment
]]`}),`
`]}})}}),`
`,n(s.h2,{children:"Variables"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-comment",children:"-- Different types"}),`

`,n(s.span,{className:"hljs-keyword",children:"local"})," x = ",n(s.span,{className:"hljs-number",children:"10"})," ",n(s.span,{className:"hljs-comment",children:"-- number"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," name = ",n(s.span,{className:"hljs-string",children:'"sid"'})," ",n(s.span,{className:"hljs-comment",children:"-- string"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," isAlive = ",n(s.span,{className:"hljs-literal",children:"true"})," ",n(s.span,{className:"hljs-comment",children:"-- boolean"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," a = ",n(s.span,{className:"hljs-literal",children:"nil"})," ",n(s.span,{className:"hljs-comment",children:"--no value or invalid value"}),`

`,n(s.span,{className:"hljs-comment",children:"-- increment in numbers"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," n = ",n(s.span,{className:"hljs-number",children:"1"}),`
n = n + `,n(s.span,{className:"hljs-number",children:"1"}),`
`,n(s.span,{className:"hljs-built_in",children:"print"}),"(n) ",n(s.span,{className:"hljs-comment",children:"-- 2"}),`

`,n(s.span,{className:"hljs-comment",children:"-- strings"}),`
`,n(s.span,{className:"hljs-comment",children:"-- Concatenate strings"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," phrase = ",n(s.span,{className:"hljs-string",children:'"I am"'}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," name = ",n(s.span,{className:"hljs-string",children:'"Sid"'}),`

`,n(s.span,{className:"hljs-built_in",children:"print"}),"(phrase .. ",n(s.span,{className:"hljs-string",children:'" "'})," .. name) ",n(s.span,{className:"hljs-comment",children:"-- I am Sid"}),`
`,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"I am "'})," .. ",n(s.span,{className:"hljs-string",children:'"Sid"'}),`)
`]}})}}),`
`,n(s.h2,{children:"Comparison Operators"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[` == equality
 < less than
 > greater than
 <= less than `,n(s.span,{className:"hljs-keyword",children:"or"}),` equal to
 >= greater than `,n(s.span,{className:"hljs-keyword",children:"or"}),` equal to
 ~= inequality
`]}})}}),`
`,n(s.h2,{children:"Conditional Statements"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-comment",children:"-- Number comparisons"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," age = ",n(s.span,{className:"hljs-number",children:"10"}),`

`,n(s.span,{className:"hljs-keyword",children:"if"})," age > ",n(s.span,{className:"hljs-number",children:"18"})," ",n(s.span,{className:"hljs-keyword",children:"then"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"over 18"'}),") ",n(s.span,{className:"hljs-comment",children:"-- this will not be executed"}),`
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- elseif and else"}),`
age = `,n(s.span,{className:"hljs-number",children:"20"}),`

`,n(s.span,{className:"hljs-keyword",children:"if"})," age > ",n(s.span,{className:"hljs-number",children:"18"})," ",n(s.span,{className:"hljs-keyword",children:"then"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"over 18"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"elseif"})," age == ",n(s.span,{className:"hljs-number",children:"18"})," ",n(s.span,{className:"hljs-keyword",children:"then"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"18 huh"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"else"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"kiddo"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- Boolean comparison"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," isAlive = ",n(s.span,{className:"hljs-literal",children:"true"}),`

`,n(s.span,{className:"hljs-keyword",children:"if"})," isAlive ",n(s.span,{className:"hljs-keyword",children:"then"}),`
    `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"Be grateful!"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- String comparisons"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"})," name = ",n(s.span,{className:"hljs-string",children:'"sid"'}),`

`,n(s.span,{className:"hljs-keyword",children:"if"})," name ~= ",n(s.span,{className:"hljs-string",children:'"sid"'})," ",n(s.span,{className:"hljs-keyword",children:"then"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"not sid"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`
`]}})}}),`
`,n(s.h3,{children:"Combining Statements"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"local"})," age = ",n(s.span,{className:"hljs-number",children:"22"}),`

`,n(s.span,{className:"hljs-keyword",children:"if"})," age == ",n(s.span,{className:"hljs-number",children:"10"})," ",n(s.span,{className:"hljs-keyword",children:"and"})," x > ",n(s.span,{className:"hljs-number",children:"0"})," ",n(s.span,{className:"hljs-keyword",children:"then"})," ",n(s.span,{className:"hljs-comment",children:"-- both should be true"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"kiddo!"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"elseif"})," x == ",n(s.span,{className:"hljs-number",children:"18"})," ",n(s.span,{className:"hljs-keyword",children:"or"})," x > ",n(s.span,{className:"hljs-number",children:"18"})," ",n(s.span,{className:"hljs-keyword",children:"then"})," ",n(s.span,{className:"hljs-comment",children:"-- 1 or more are true"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"over 18"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- result: over 18"}),`
`]}})}}),`
`,n(s.h3,{children:"Invert Value"}),`
`,n(s.p,{get children(){return["You can also invert a value with the ",n(s.strong,{children:"not"})," keyword:"]}}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"local"})," isAlive = ",n(s.span,{className:"hljs-literal",children:"true"}),`

`,n(s.span,{className:"hljs-keyword",children:"if"})," ",n(s.span,{className:"hljs-keyword",children:"not"})," isAlive ",n(s.span,{className:"hljs-keyword",children:"then"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'" ye ded!"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`
`]}})}}),`
`,n(s.h2,{children:"Functions"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"local"})," ",n(s.span,{className:"hljs-function",get children(){return[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title",children:"print_num"}),n(s.span,{className:"hljs-params",children:"(a)"})]}}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),`(a)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-keyword",children:"or"}),`

`,n(s.span,{className:"hljs-keyword",children:"local"})," print_num = ",n(s.span,{className:"hljs-function",get children(){return[n(s.span,{className:"hljs-keyword",children:"function"}),n(s.span,{className:"hljs-params",children:"(a)"})]}}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),`(a)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

print_num(`,n(s.span,{className:"hljs-number",children:"5"}),") ",n(s.span,{className:"hljs-comment",children:"-- prints 5 "}),`

`,n(s.span,{className:"hljs-comment",children:"-- multiple parameters"}),`
`,n(s.span,{className:"hljs-function",get children(){return[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title",children:"sum"}),n(s.span,{className:"hljs-params",children:"(a, b)"})]}}),`
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` a + b
`,n(s.span,{className:"hljs-keyword",children:"end"}),`
`]}})}}),`
`,n(s.h2,{children:"Scope"}),`
`,n(s.p,{children:"Variables have different scopes. Once the end of the scope is reached, the values in that scope are no longer accessible."}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-function",get children(){return[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title",children:"foo"}),n(s.span,{className:"hljs-params",children:"()"})]}}),`
  `,n(s.span,{className:"hljs-keyword",children:"local"})," n = ",n(s.span,{className:"hljs-number",children:"10"}),`
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-built_in",children:"print"}),"(n) ",n(s.span,{className:"hljs-comment",children:"-- nil , n isn't accessible outside foo()"}),`
`]}})}}),`
`,n(s.h2,{children:"Loops"}),`
`,n(s.p,{children:"Different ways to make a loop:"}),`
`,n(s.h3,{children:"While"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"local"})," i = ",n(s.span,{className:"hljs-number",children:"1"}),`

`,n(s.span,{className:"hljs-keyword",children:"while"})," i <= ",n(s.span,{className:"hljs-number",children:"3"})," ",n(s.span,{className:"hljs-keyword",children:"do"}),`
   `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"hi"'}),`)
   i = i + `,n(s.span,{className:"hljs-number",children:"1"}),`
`,n(s.span,{className:"hljs-keyword",children:"end"}),`
`]}})}}),`
`,n(s.h3,{children:"For"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"for"})," i = ",n(s.span,{className:"hljs-number",children:"1"}),", ",n(s.span,{className:"hljs-number",children:"3"})," ",n(s.span,{className:"hljs-keyword",children:"do"}),`
   `,n(s.span,{className:"hljs-built_in",children:"print"}),"(",n(s.span,{className:"hljs-string",children:'"hi"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`
`,n(s.span,{className:"hljs-comment",children:'-- Both print "hi" 3 times'}),`
`]}})}}),`
`,n(s.h2,{children:"Tables"}),`
`,n(s.ul,{get children(){return[`
`,n(s.li,{children:"Tables can be used to store complex data."}),`
`,n(s.li,{children:"Types of tables: arrays (lists) and dicts (key,value)"}),`
`]}}),`
`,n(s.h3,{children:"Arrays"}),`
`,n(s.ul,{get children(){return[`
`,n(s.li,{children:'Items within these can be accessed by "index".'}),`
`]}}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"local"})," colors = { ",n(s.span,{className:"hljs-string",children:'"red"'}),", ",n(s.span,{className:"hljs-string",children:'"green"'}),", ",n(s.span,{className:"hljs-string",children:'"blue"'}),` }

`,n(s.span,{className:"hljs-built_in",children:"print"}),"(colors[",n(s.span,{className:"hljs-number",children:"1"}),"]) ",n(s.span,{className:"hljs-comment",children:"-- red"}),`

`,n(s.span,{className:"hljs-comment",children:"-- Different ways to loop through lists"}),`
`,n(s.span,{className:"hljs-comment",children:"-- #colors is the length of the table, #tablename is the syntax"}),`

`,n(s.span,{className:"hljs-keyword",children:"for"})," i = ",n(s.span,{className:"hljs-number",children:"1"}),", #colors ",n(s.span,{className:"hljs-keyword",children:"do"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),`(colors[i])
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- ipairs "}),`
`,n(s.span,{className:"hljs-keyword",children:"for"})," index, value ",n(s.span,{className:"hljs-keyword",children:"in"})," ",n(s.span,{className:"hljs-built_in",children:"ipairs"}),"(colors) ",n(s.span,{className:"hljs-keyword",children:"do"}),`
   `,n(s.span,{className:"hljs-built_in",children:"print"}),`(colors[index])
   `,n(s.span,{className:"hljs-comment",children:"-- or"}),`
   `,n(s.span,{className:"hljs-built_in",children:"print"}),`(value)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- If you dont use index or value here then you can replace it with _ "}),`
`,n(s.span,{className:"hljs-keyword",children:"for"})," _, value ",n(s.span,{className:"hljs-keyword",children:"in"})," ",n(s.span,{className:"hljs-built_in",children:"ipairs"}),"(colors) ",n(s.span,{className:"hljs-keyword",children:"do"}),`
   `,n(s.span,{className:"hljs-built_in",children:"print"}),`(value)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`
`]}})}}),`
`,n(s.h3,{children:"Dictionaries"}),`
`,n(s.ul,{get children(){return[`
`,n(s.li,{children:"These contain keys and values:"}),`
`]}}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-keyword",children:"local"}),` info = { 
   name = `,n(s.span,{className:"hljs-string",children:'"sid"'}),`,
   age = `,n(s.span,{className:"hljs-number",children:"20"}),`,
   isAlive = `,n(s.span,{className:"hljs-literal",children:"true"}),`
}

`,n(s.span,{className:"hljs-comment",children:"-- both print sid"}),`
`,n(s.span,{className:"hljs-built_in",children:"print"}),"(info[",n(s.span,{className:"hljs-string",children:'"name"'}),`])
`,n(s.span,{className:"hljs-built_in",children:"print"}),`(info.name)

`,n(s.span,{className:"hljs-comment",children:"-- Loop by pairs"}),`
`,n(s.span,{className:"hljs-keyword",children:"for"})," key, value ",n(s.span,{className:"hljs-keyword",children:"in"})," ",n(s.span,{className:"hljs-built_in",children:"pairs"}),"(info) ",n(s.span,{className:"hljs-keyword",children:"do"}),`
   `,n(s.span,{className:"hljs-built_in",children:"print"}),"(key .. ",n(s.span,{className:"hljs-string",children:'" "'})," .. ",n(s.span,{className:"hljs-built_in",children:"tostring"}),`(value))
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- prints name sid, age 20 etc"}),`
`]}})}}),`
`,n(s.h3,{get children(){return n(s.strong,{children:"Nested Tables"})}}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-comment",children:"-- Nested lists"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"}),` data = {
    { `,n(s.span,{className:"hljs-string",children:'"sid"'}),", ",n(s.span,{className:"hljs-number",children:"20"}),` },
    { `,n(s.span,{className:"hljs-string",children:'"tim"'}),", ",n(s.span,{className:"hljs-number",children:"90"}),` },
}

`,n(s.span,{className:"hljs-keyword",children:"for"})," i = ",n(s.span,{className:"hljs-number",children:"1"}),", #data ",n(s.span,{className:"hljs-keyword",children:"do"}),`
  `,n(s.span,{className:"hljs-built_in",children:"print"}),"(data[i][",n(s.span,{className:"hljs-number",children:"1"}),"] .. ",n(s.span,{className:"hljs-string",children:'" is "'})," .. data[i][",n(s.span,{className:"hljs-number",children:"2"}),"] .. ",n(s.span,{className:"hljs-string",children:'" years old"'}),`)
`,n(s.span,{className:"hljs-keyword",children:"end"}),`

`,n(s.span,{className:"hljs-comment",children:"-- Nested dictionaries"}),`
`,n(s.span,{className:"hljs-keyword",children:"local"}),` data = {
    sid = { age = `,n(s.span,{className:"hljs-number",children:"20"}),` },
    tim = { age = `,n(s.span,{className:"hljs-number",children:"90"}),` },
}
`]}})}}),`
`,n(s.h2,{children:"Modules"}),`
`,n(s.p,{children:"Import code from other files"}),`
`,n(s.pre,{get children(){return n(s.code,{className:"hljs language-lua",get children(){return[n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:'"path"'}),`)

`,n(s.span,{className:"hljs-comment",children:"-- for example in ~/.config/nvim/lua , all dirs and files are accessable via require"}),`
`,n(s.span,{className:"hljs-comment",children:"-- Do know that all files in that lua folder are in path!"}),`
`,n(s.span,{className:"hljs-comment",children:"-- ~/.config/nvim/lua/custom "}),`
`,n(s.span,{className:"hljs-comment",children:"-- ~/.config/nvim/lua/custom/init.lua"}),`

 `,n(s.span,{className:"hljs-built_in",children:"require"})," ",n(s.span,{className:"hljs-string",children:'"custom"'}),`

`,n(s.span,{className:"hljs-comment",children:"-- both do the same thing"}),`
`]}})}})]}function i(e={}){const{wrapper:s}=Object.assign({},a(),e.components);return s?n(s,r(e,{get children(){return n(l,e)}})):l(e)}export{i as default};
