import{aq as n,ar as c,ap as d,a as s,ai as f,ah as o,aw as E}from"./index-Cd0kSdaF.js";import{$ as l,E as L}from"./IdurarOs-Vv71th3u.js";import"./index-CPNcZCnD.js";import{s as T,E as i}from"./selectors-CaHUuIKE.js";import{U as x}from"./UpdateItem-DGwho3F5.js";import{Q as y}from"./QuoteForm-YDyCtCba.js";import{e as p}from"./actions-BiJ_6wdU.js";import"./index-D1k_-FKY.js";import"./ErpApp-DLeU0-DG.js";import"./DownOutlined-BTlj5zpM.js";import"./calculate-BDnin_T9.js";import"./useDate-BcaeHTEz.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-DZGkyCsu.js";import"./CloseCircleOutlined-BhBCd0r7.js";import"./PlusOutlined-Eme4bCvn.js";import"./index-ByHBXP24.js";import"./useDebounce-goFyg7-P.js";import"./index-DHqFXhNz.js";import"./index-DK72f1zd.js";import"./index-CMxyMDTc.js";import"./DeleteOutlined-NBcA4Z5u.js";import"./index-C7JjO8bM.js";import"./useFetch-BkNAQUmQ.js";import"./color-DHucoY0N.js";function _({config:t}){const r=n(),{id:a}=c();d(),s.useLayoutEffect(()=>{r(p.read({entity:t.entity,id:a}))},[a]);const{result:e,isSuccess:m,isLoading:u=!0}=f(T);return s.useLayoutEffect(()=>{e&&r(p.currentAction({actionType:"update",data:e}))},[e]),u?o.jsx(i,{children:o.jsx(E,{})}):o.jsx(i,{children:m?o.jsx(x,{config:t,UpdateForm:y}):o.jsx(l,{entity:t.entity})})}function H(){const t=L(),r="quote",a={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},e={entity:r,...a};return o.jsx(_,{config:e})}export{H as default};