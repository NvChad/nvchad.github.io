import{b as n,q as i,k as l,t}from"./web-uzQsy4d_.js";import{M as h}from"./index-BosUlz4E.js";var a=t("<br>"),c=t("<u>WARNING: Do this at your own risk because you might not be able to make nice nvchad themes like siduck.");const u={title:"NvChad Theming",desc:"Configure base46 themes in Nvchad"};function r(s){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...h(),...s.components};return[n(e.h2,{children:"Override highlight groups"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Make sure you use a valid highlight group."}),`
`,n(e.li,{get children(){return["Check your theme colors in the ",n(e.a,{href:"https://github.com/NvChad/base46/tree/v2.0/lua/base46/themes",children:"base46 theme dir"})]}}),`
`,n(e.li,{get children(){return["To know which highlight groups are available, check the ",n(e.a,{href:"https://github.com/NvChad/base46/tree/v2.0/lua/base46/integrations",children:"base46 integrations dir"})]}}),`
`,n(e.li,{children:"Also if you just press tab key in hl_override, a list of highlight groups will show up via the completion menu."}),`
`]}}),`
`,n(e.p,{children:'When modifying the custom highlight groups in your theme file, such as "onedark.lua", it is important to note that only the variables from "base_30" can be used for this purpose.'}),`
`,n(e.p,{children:'Although hex colors can also be used in the "fg/bg" field, it is recommended to utilize the variable names (e.g. "blue", "darker_black", "one_bg", etc.) from your theme file as they will provide a better aesthetic. This way, there is no need to manually write the hex colors.'}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
   hl_override = {
      Pmenu = { bg = `,n(e.span,{className:"hljs-string",children:'"white"'}),` },
      `,n(e.span,{className:"hljs-comment",children:'-- Pmenu = { bg = "#ffffff" }, this works too'}),`
        
      `,n(e.span,{className:"hljs-comment",children:"-- if you want to lighten or darken color"}),`
      `,n(e.span,{className:"hljs-comment",children:"-- this will use the black color from nvchad theme & lighten it by 2x"}),`
      `,n(e.span,{className:"hljs-comment",children:"-- use a negative number to darken it"}),`
      Normal = {
        bg = {`,n(e.span,{className:"hljs-string",children:'"black"'}),", ",n(e.span,{className:"hljs-number",children:"2"}),`}
      },

      MyHighlightGroup = { `,n(e.span,{className:"hljs-comment",children:"-- custom highlights are also allowed"}),`
         fg = `,n(e.span,{className:"hljs-string",children:'"red"'}),`,
         bg = `,n(e.span,{className:"hljs-string",children:'"darker_black"'}),`
      }
   },
}
`]}})}}),`
`,l(a),`
`,n(e.p,{get children(){return["In order to add custom highlights, it's the same as above, just use ",n(e.strong,{get children(){return n(e.code,{children:"hl_add"})}}),"."]}}),`
`,n(e.h2,{children:"Customize themes"}),`
`,n(e.p,{children:"If you just want to customize an already existing theme, you can change the following configuration:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
   changed_themes = {
      onedark = {
         base_16 = {
            base00 = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
         base_30 = {
            red = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
            white = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
      },

      nord = {
         `,n(e.span,{className:"hljs-comment",children:"-- and so on!"}),`
      },
   },
}
`]}})}}),`
`,n(e.h3,{children:"Local themes"}),`
`,n(e.blockquote,{get children(){return[`
`,l(c),`
`]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Default themes can be found in our ",n(e.a,{href:"https://github.com/NvChad/base46/tree/v2.5/lua/base46/themes",get children(){return n(e.code,{children:"base46"})}})," repository."]}}),`
`]}}),`
`,n(e.p,{children:"Here is the default structure for NvChad themes:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- place the file in /themes/<theme-name>.lua"}),`
`,n(e.span,{className:"hljs-comment",children:"-- for example: /lua/themes/siduck.lua"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

M.base_30 = {
   `,n(e.span,{className:"hljs-comment",children:"-- 30 colors based on base_16"}),`
}

M.base_16 = {
   `,n(e.span,{className:"hljs-comment",children:"-- base16 colors"}),`
}

M.`,n(e.span,{className:"hljs-built_in",children:"type"})," = ",n(e.span,{className:"hljs-string",children:'"dark"'})," ",n(e.span,{className:"hljs-comment",children:"-- light / dark"}),`

`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]}})}}),`
`,l(a),`
`,n(e.p,{children:"Finally, add your theme in chadrc."}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.ui = {
   theme = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}
`]}})}}),`
`,n(e.h2,{children:"Integrations"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`M.base46 = {
  integrations = {
    `,n(e.span,{className:"hljs-string",children:'"blankline"'}),`,
    `,n(e.span,{className:"hljs-string",children:'"cmp"'}),`,
    `,n(e.span,{className:"hljs-string",children:'"git"'}),`,
    `,n(e.span,{className:"hljs-comment",children:"-- more"}),`
  }
}
`]}})}}),`
`,l(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Base46  uses the above table to compile highlight groups."}),`
`,n(e.li,{children:"To load them, use the dofile function + full path of that highlight group cache file."}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"dofile"}),"(vim.g.base46_cache .. ",n(e.span,{className:"hljs-string",children:'"cmp"'}),`)
`]}})}}),`
`,l(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"You can put the dofile code in your init.lua to make the highlight groups load by default, but in most cases you can just lazyload them like :"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`{
  `,n(e.span,{className:"hljs-string",children:'"folke/trouble.nvim"'}),`,
  cmd = `,n(e.span,{className:"hljs-string",children:'"Trouble"'}),`,
  `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
     `,n(e.span,{className:"hljs-built_in",children:"dofile"}),"(vim.g.base46_cache .. ",n(e.span,{className:"hljs-string",children:'"trouble"'}),`)
     `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"trouble"'}),`).setup()
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`
}
`]}})}})]}function m(s={}){const{wrapper:e}={...h(),...s.components};return e?n(e,i(s,{get children(){return n(r,s)}})):r(s)}export{m as default,u as meta};
