import{b as n,n as h,g as l,t as r}from"./entry-client-6243de9d.js";import{M as i}from"./index-eaa7d6c5.js";const a=r("<br>"),c=r("<u>WARNING: Do this at your own risk because you might not be able to make nice nvchad themes like siduck.");function t(s){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code",span:"span",strong:"strong",h3:"h3",blockquote:"blockquote"},i(),s.components);return[n(e.h2,{children:"Override highlight groups"}),`
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
      `,n(e.span,{className:"hljs-comment",children:"-- this will use the black colorf rom nvchad theme & lighten it by 2x"}),`
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
`,n(e.p,{get children(){return["In order to add custom highlights, its the same as above, just use ",n(e.strong,{get children(){return n(e.code,{children:"hl_add"})}}),"."]}}),`
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
`,n(e.li,{get children(){return["Default themes can be found in our ",n(e.a,{href:"https://github.com/NvChad/base46",get children(){return n(e.code,{children:"base46"})}})," repository."]}}),`
`]}}),`
`,n(e.p,{children:"Here is the default structure for NvChad themes:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-comment",children:"-- place the file in /custom/themes/<theme-name>.lua"}),`
`,n(e.span,{className:"hljs-comment",children:"-- for example: custom/themes/siduck.lua"}),`

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
`,n(e.h2,{children:"Extended Integrations"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/NvChad/base46/tree/v2.0/lua/base46/extended_integrations",children:"Base46 Extended integrations"})," aren't loaded by default, to load them you need to mention the integration name in chadrc's ui table's ",n(e.code,{children:"extended_integrations"})," table"]}}),`
`]}}),`
`,n(e.p,{children:"Example :"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return["M.ui.extended_integrations = {",n(e.span,{className:"hljs-string",children:'"trouble"'}),", ",n(e.span,{className:"hljs-string",children:'"alpha"'}),", ",n(e.span,{className:"hljs-string",children:'"dap"'}),`}
`]}})}}),`
`,l(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:'Now these integrations are included with the default list of integrations in base46 for compiling & caching, to load them use "dofile"'}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[n(e.span,{className:"hljs-built_in",children:"dofile"}),"(vim.g.base46_cache .. ",n(e.span,{className:"hljs-string",children:'"trouble"'}),`)
`,n(e.span,{className:"hljs-built_in",children:"dofile"}),"(vim.g.base46_cache .. ",n(e.span,{className:"hljs-string",children:'"alpha"'}),`)
`]}})}}),`
`,l(a),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"You can put the dofile code in custom/init.lua to make the highlight groups load by default, but in most cases you can just lazyload them so just put in the plugin's config function spec , example"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-lua",get children(){return[`{
  `,n(e.span,{className:"hljs-string",children:'"folke/trouble.nvim"'}),`,
  cmd = `,n(e.span,{className:"hljs-string",children:'"Trouble"'}),`,
  `,n(e.span,{className:"hljs-built_in",children:"config"})," = ",n(e.span,{className:"hljs-function",get children(){return[n(e.span,{className:"hljs-keyword",children:"function"}),n(e.span,{className:"hljs-params",children:"()"})]}}),`
     `,n(e.span,{className:"hljs-built_in",children:"dofile"}),"(vim.g.base46_cache .. ",n(e.span,{className:"hljs-string",children:'"trouble"'}),`)
     `,n(e.span,{className:"hljs-built_in",children:"require"}),"(",n(e.span,{className:"hljs-string",children:'"trouble"'}),`).setup()
  `,n(e.span,{className:"hljs-keyword",children:"end"}),`
}
`]}})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"In the above example we have lazyloaded the plugin as well as its highlight groups!"}),`
`]}})]}function u(s={}){const{wrapper:e}=Object.assign({},i(),s.components);return e?n(e,h(s,{get children(){return n(t,s)}})):t(s)}export{u as default};
