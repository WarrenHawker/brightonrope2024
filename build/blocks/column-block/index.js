(()=>{"use strict";var e,t={201:()=>{const e=window.wp.blocks,t=window.React,r=(window.wp.i18n,window.wp.blockEditor),n=window.wp.components,o=JSON.parse('{"UU":"brighton-rope/column-block"}');(0,e.registerBlockType)(o.UU,{edit:({attributes:e,setAttributes:o})=>{const l=(0,r.useBlockProps)(),{maxWidth:a}=e,i={maxWidth:a};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(n.PanelBody,null,(0,t.createElement)(n.RangeControl,{label:"Column Max Width",value:a,onChange:e=>o({maxWidth:e}),min:100,max:2e3,step:100}))),(0,t.createElement)("div",{...l,className:"brighton-rope-column-preview",style:i},(0,t.createElement)(r.InnerBlocks,null)))},save:({attributes:e})=>{const n=r.useBlockProps.save(),{maxWidth:o}=e,l={maxWidth:o};return(0,t.createElement)("div",{...n,className:"brighton-rope-column",style:l},(0,t.createElement)(r.InnerBlocks.Content,null))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,o,l)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,o,l]=e[p],i=!0,s=0;s<r.length;s++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,o,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={323:0,379:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[a,i,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var p=s(n)}for(t&&t(r);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},r=globalThis.webpackChunkbrightonrope2024=globalThis.webpackChunkbrightonrope2024||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[379],(()=>n(201)));o=n.O(o)})();