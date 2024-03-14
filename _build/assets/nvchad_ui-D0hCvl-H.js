import{b as n,q as t,k as s,t as c}from"./web-CBU83r8B.js";import{M as i}from"./index-C2YDUEaq.js";var r=c("<br>");const o={title:"NvChad UI Configuration",desc:"Manage NvChad's UI plugin configuration"};function a(l){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...l.components};return[n(e.h2,{children:"Overview"}),`
`,n(e.p,{children:"NvChad's Ui plugin handles the following modules:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Statusline"}),`
`,n(e.li,{children:"Tabufline ( bufferline + tablist )"}),`
`,n(e.li,{children:"NvDash ( Minimal dashboard )"}),`
`,n(e.li,{children:"Term ( terminal handling )"}),`
`]}}),`
`,n(e.h2,{children:"Statusline & tabufline"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"The order is a list of module names from default modules + your modules"}),`
`,n(e.li,{children:"Removing a word in the order will remove that module"}),`
`,n(e.li,{children:"Modules expect all its keys to be a function that returns a string."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
  tabufline = {
    `,n(e.span,{className:"hljs-comment",children:"--  more opts"}),`
    order = { `,n(e.span,{className:"hljs-string",children:'"treeOffset"'}),", ",n(e.span,{className:"hljs-string",children:'"buffers"'}),", ",n(e.span,{className:"hljs-string",children:'"tabs"'}),", ",n(e.span,{className:"hljs-string",children:'"btns"'}),", ",n(e.span,{className:"hljs-string",children:"'abc'"}),` },
    modules = {
      abc = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
        `,n(e.span,{className:"hljs-keyword",children:"return"})," ",n(e.span,{className:"hljs-string",children:'"hi"'}),`
      `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
    }
  },
}
`]}})}}),`
`,s(r),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Same goes for statuslines, but check its module order tables at ",n(e.a,{href:"https://github.com/NvChad/ui/blob/v2.5/lua/nvchad/stl/utils.lua",children:"ui repo"})]}}),`
`,n(e.li,{children:"Statusline modules can also have strings!"}),`
`,n(e.li,{children:"To highlight a string in statusline/tabufline, wrap it with your highlight group:"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-string",children:'"%#BruhHl#"'})," .. ",n(e.span,{className:"hljs-string",children:'" bruh "'})," ",n(e.span,{className:"hljs-comment",children:"-- the highlight group here is BruhHl"}),`
`]}})}}),`
`,n(e.h2,{children:"Term"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"The term module exposes the following functions which expect a table of :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`{
  pos = `,n(e.span,{className:"hljs-string",children:'"sp"'}),", ",n(e.span,{className:"hljs-comment",children:"-- sp/vsp/float"}),`
  cmd* = `,n(e.span,{className:"hljs-string",children:'"neofetch"'})," ",n(e.span,{className:"hljs-comment",children:"-- any command! (supports function too)"}),`

  `,n(e.span,{className:"hljs-comment",children:"-- this will highlight the term window differently"}),`
  hl* = `,n(e.span,{className:"hljs-string",children:'"Normal:term,WinSeparator:WinSeparator"'}),`, 

  id =  `,n(e.span,{className:"hljs-string",children:'"any string"'})," ",n(e.span,{className:"hljs-comment",children:"-- needed for toggle/runner func"}),`
  float_opts* = {} `,n(e.span,{className:"hljs-comment",children:"-- floating window options"}),`
  clear_cmd = `,n(e.span,{className:"hljs-literal",children:"true"})," ",n(e.span,{className:"hljs-comment",children:"-- needed for runner func*"}),`
}
`]}})}}),`
`,s(r),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"*ones are optional"}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"pos"})," is required."]}}),`
`,n(e.li,{get children(){return[n(e.strong,{children:"id"})," is needed for toggleable/runner terminals only"]}}),`
`,n(e.li,{get children(){return["If the optional opts are not provided then they will be taken from the ",n(e.code,{children:"ui.term"})," table of your chadrc."]}}),`
`]}}),`
`,n(e.h3,{children:"New Window"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Create new terminal windows"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").new { pos = ",n(e.span,{className:"hljs-string",children:'"sp"'}),", size = ",n(e.span,{className:"hljs-number",children:"0.3"}),` }
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").new { pos = ",n(e.span,{className:"hljs-string",children:'"vsp"'}),", cmd = ",n(e.span,{className:"hljs-string",children:'"neofetch"'}),`}
`]}})}}),`
`,n(e.h3,{children:"Toggleable"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Create toggleable terminal windows"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle({ pos = ",n(e.span,{className:"hljs-string",children:'"float"'}),", id = ",n(e.span,{className:"hljs-string",children:'"floatTerm"'}),`, float_opts = {
      border = `,n(e.span,{className:"hljs-string",children:'"double"'}),`,
  }})

`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle { pos = ",n(e.span,{className:"hljs-string",children:'"float"'}),", id = ",n(e.span,{className:"hljs-string",children:'"floa"'}),", cmd =",n(e.span,{className:"hljs-string",children:"'lazygit'"}),` }
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle { pos = ",n(e.span,{className:"hljs-string",children:'"sp"'}),", id = ",n(e.span,{className:"hljs-string",children:'"xyz"'}),` }
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle { pos = ",n(e.span,{className:"hljs-string",children:'"sp"'}),", id = ",n(e.span,{className:"hljs-string",children:'"xyz2"'}),` }
`,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle { pos = ",n(e.span,{className:"hljs-string",children:'"vsp"'}),", id = ",n(e.span,{className:"hljs-string",children:'"floo"'}),` }
`]}})}}),`
`,s(r),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Mapping example"}),`
`,n(e.li,{get children(){return[`We are mapping in "t" terminal mode too or else we'd have to go to  normal mode and press `,n(e.code,{children:"<A-i>"})," to toggle terminal."]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-keyword",children:"local"}),` map = vim.keymap.set

map({ `,n(e.span,{className:"hljs-string",children:'"n"'}),", ",n(e.span,{className:"hljs-string",children:'"t"'})," }, ",n(e.span,{className:"hljs-string",children:'"<A-i>"'}),", ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
  `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),").toggle { pos = ",n(e.span,{className:"hljs-string",children:'"float"'}),", id = ",n(e.span,{className:"hljs-string",children:'"floatTerm"'}),` }
`,n(e.span,{className:"hljs-keyword",children:"end"}),", { desc = ",n(e.span,{className:"hljs-string",children:'"Terminal Toggle Floating term"'}),` })
`]}})}}),`
`,n(e.h3,{children:"Runner"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"This function will first open a terminal + runs the cmd"}),`
`,n(e.li,{get children(){return["Calling the function again will run the ",n(e.code,{children:"cmd"})," in that terminal window"]}}),`
`,n(e.li,{children:"This can be seen as a code runner too! Usually useful if you want to see the result of some command"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),`).runner {
    pos = `,n(e.span,{className:"hljs-string",children:'"vsp"'}),`,
    cmd = `,n(e.span,{className:"hljs-string",children:'"python test.py"'}),`,
    id = `,n(e.span,{className:"hljs-string",children:'"ekk"'}),`,
    clear_cmd = `,n(e.span,{className:"hljs-literal",children:"false"}),`
  }
`]}})}}),`
`,s(r),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"As Cmd can be a function too, here's a complex example :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"nvchad.term"'}),`).runner {
  id = `,n(e.span,{className:"hljs-string",children:'"boo"'}),`,
  pos = `,n(e.span,{className:"hljs-string",children:'"sp"'}),`,

  cmd = `,n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
    `,n(e.span,{className:"hljs-keyword",children:"local"})," file = vim.fn.expand ",n(e.span,{className:"hljs-string",children:'"%"'}),`

    `,n(e.span,{className:"hljs-keyword",children:"local"}),` ft_cmds = {
      python = `,n(e.span,{className:"hljs-string",children:'"python3 "'}),` .. file,
      cpp = `,n(e.span,{className:"hljs-string",children:'"clear && g++ -o out "'})," .. file .. ",n(e.span,{className:"hljs-string",children:'" && ./out"'}),`,
    }

    `,n(e.span,{className:"hljs-keyword",children:"return"}),` ft_cmds[vim.bo.ft]
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`,
}
`]}})}}),`
`,n(e.h2,{children:"Telescope extensions"}),`
`,n(e.p,{children:"These are few telescope extensions present in the UI plugin."}),`
`,n(e.h3,{children:"Theme picker"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"This will show a list of themes from base46 and live-preview them + pressing enter will save them in chadrc."}),`
`,n(e.li,{get children(){return["Command ",n(e.code,{children:"Telescope themes"})]}}),`
`]}}),`
`,n(e.h3,{children:"Hidden Term picker"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["If you close any terminal window by our close_buffer func i.e ",n(e.code,{children:"<leader>x"})," then it'll just hide it"]}}),`
`,n(e.li,{get children(){return["You can un-hide them back by using ",n(e.code,{children:"<leader>pt"})," keymap + press enter"]}}),`
`,n(e.li,{get children(){return["Command ",n(e.code,{children:"Telescope terms"})]}}),`
`]}})]}function m(l={}){const{wrapper:e}={...i(),...l.components};return e?n(e,t(l,{get children(){return n(a,l)}})):a(l)}export{m as default,o as meta};
