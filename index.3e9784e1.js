function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n={WARNING_NAME_REQUIRED:{title:"Warning",message:"Name field is required.",type:"warning"},WARNING_AGE_REQUIRED:{title:"Warning",message:"Age field is required.",type:"warning"},WARNING_POSITION_REQUIRED:{title:"Warning",message:"Position field is required.",type:"error"},WARNING_SALARY_REQUIRED:{title:"Warning",message:"Salary field is required.",type:"warning"},WARNING_OFFICE_REQUIRED:{title:"Warning",message:"Office field is required.",type:"warning"},ERROR_SHORT_NAME:{title:"Short name",message:"Name must be at least 4 letters long.",type:"error"},ERROR_INCORRECT_AGE:{title:"Incorrect age",message:"Age must be between 18 and 90.",type:"error"},ERROR_NEGATIVE_SALARY:{title:"Invalid Salary",message:"Salary cannot be negative.",type:"error"},SUCCESS_NEW_EMPLOYEE:{title:"Success",message:"New employee added successfully.",type:"success"}},a=document.querySelector("tbody"),r=t(document.querySelectorAll("thead th")).map(function(e){return e.textContent}),i={};function o(){return document.querySelectorAll("tbody tr")}function l(){o().forEach(function(e){e.addEventListener("click",function(){var t=e.classList.contains("active");o().forEach(function(e){return e.classList.remove("active")}),t||e.classList.add("active")})})}document.querySelectorAll("thead th").forEach(function(e){i[e.textContent]="ASC",e.addEventListener("click",function(e){var n,c,u,s=o(),m=e.target.textContent,p=(n=t(s).map(function(e){var n={};return t(e.cells).forEach(function(e,t){n[r[t]]=e.textContent}),n}),c=i[m],u="Salary"===m,n.sort(function(e,t){var n,a;return(u?(n=e[m].replace("$","").replace(",",""),a=t[m].replace("$","").replace(",","")):(n=e[m],a=t[m]),"ASC"===c)?u?n-a:n.localeCompare(a):u?a-n:a.localeCompare(n)}));for(var f in i)f===m?i[f]="ASC"===i[f]?"DESC":"ASC":i[f]="ASC";a.innerHTML="",function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var l=i.value,c=document.createElement("tr");for(var u in l){var s=document.createElement("td");s.textContent=l[u],c.appendChild(s)}a.appendChild(c)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}(p),l(),o().forEach(d)})});var c=document.createElement("form");c.className="new-employee-form",c.noValidate=!0,[{label:"Name:",name:"name",type:"text",qa:"name"},{label:"Position:",name:"position",type:"text",qa:"position"},{label:"Office:",name:"office",type:"select",qa:"office",options:["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"]},{label:"Age:",name:"age",type:"number",qa:"age"},{label:"Salary:",name:"salary",type:"number",qa:"salary"}].forEach(function(e){var t=e.label,n=e.name,a=e.type,r=e.qa,i=document.createElement("label");if(i.textContent=t+" ","select"===a){var o=document.createElement("select");o.name=n,o.setAttribute("data-qa",r),o.required=!0,e.options.forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,o.appendChild(t)}),i.appendChild(o)}else{var l=document.createElement("input");l.name=n,l.type=a,l.setAttribute("data-qa",r),l.required=!0,i.appendChild(l)}c.appendChild(i)});var u=document.createElement("button");function s(e,t,n,a,r){var i=document.createElement("div"),o=document.createElement("h3"),l=document.createElement("p");i.className="notification ".concat(r),i.setAttribute("data-qa","notification"),i.style.top="".concat(e,"px"),i.style.right="".concat(t,"px"),o.className="title",o.textContent=n,l.textContent=a,i.appendChild(o),i.appendChild(l),document.body.appendChild(i),setTimeout(function(){i.remove()},5e3)}function d(e){e.querySelectorAll("td").forEach(function(e){e.addEventListener("dblclick",function(){var t=e.textContent,n=4===e.cellIndex,a=parseInt(window.getComputedStyle(e).width,10),r=document.createElement("input");e.textContent="",r.type="text",r.className="cell-input",r.value=n?t.replace(/[$,]/g,""):t,r.style.width="".concat(a,"px"),r.style.boxSizing="border-box",e.appendChild(r),r.focus(),r.addEventListener("blur",function(){return m(e,t,n)}),r.addEventListener("keypress",function(a){"Enter"===a.key&&m(e,t,n)})})})}function m(e,t,n){var a=e.querySelector(".cell-input");if(a){var r,i,o=a.value.trim();if(3!==e.cellIndex||(i=parseInt(r=a.value,10),/^[0-9]+$/.test(r)&&i>=18&&i<=90)){if(n){var l=parseInt(o,10);o=isNaN(l)||l<0?t:"$".concat(l.toLocaleString())}else o=o||t}else o=t;e.textContent=o}}u.type="submit",u.textContent="Save to table",u.addEventListener("click",function(e){e.preventDefault();var t=c.querySelector('input[name="name"]').value.trim(),r=parseInt(c.querySelector('input[name="age"]').value,10),i=document.querySelector('input[name="position"]').value.trim(),l=document.querySelector('select[name="office"]').value,u=document.querySelector('input[name="salary"]').value;if(!t){var m=n.WARNING_NAME_REQUIRED;s(10,10,m.title,m.message,m.type);return}if(!i){var p=n.WARNING_POSITION_REQUIRED;s(10,10,p.title,p.message,p.type);return}if(!l){var f=n.WARNING_OFFICE_REQUIRED;s(10,10,f.title,f.message,f.type);return}if(!r){var E=n.WARNING_AGE_REQUIRED;s(10,10,E.title,E.message,E.type);return}if(!u){var y=n.WARNING_SALARY_REQUIRED;s(10,10,y.title,y.message,y.type);return}if(t.length<4){var v=n.ERROR_SHORT_NAME;s(10,10,v.title,v.message,v.type);return}if(r<18||r>90){var R=n.ERROR_INCORRECT_AGE;s(10,10,R.title,R.message,R.type);return}if(0>parseFloat(u)){var S=n.ERROR_NEGATIVE_SALARY;s(10,10,S.title,S.message,S.type);return}var g=c.querySelectorAll("input, select"),A=document.createElement("tr");A.addEventListener("click",function(){var e=A.classList.contains("active");o().forEach(function(e){return e.classList.remove("active")}),e||A.classList.add("active")}),g.forEach(function(e){var t,n=document.createElement("td");n.textContent="salary"===e.name?(t=e.value,"$".concat(parseInt(t).toLocaleString())):e.value,A.appendChild(n)}),a.appendChild(A),d(A),c.reset();var C=n.SUCCESS_NEW_EMPLOYEE;s(10,10,C.title,C.message,C.type)}),c.appendChild(u),document.body.appendChild(c),o().forEach(d),l();
//# sourceMappingURL=index.3e9784e1.js.map
