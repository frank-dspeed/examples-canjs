//import deepmerge from 'deepmerge'
import stache from 'can-stache'
import 'can-view-import'
import 'can-view-scope'
import 'can-stache-bindings'
import defineMap from 'can-define/map/'
import Component from 'can-component'
import canViewModel from 'can-view-model'
//import "~/report/create/report"
function BabelHTMLElement(){
  const newTarget = this.__proto__.constructor;
  return Reflect.construct(HTMLElement, [], newTarget);
}
Object.setPrototypeOf(BabelHTMLElement, HTMLElement);
Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype);


export default class myApp extends BabelHTMLElement {
  constructor(){
    super();
    //this.attachShadow({mode: 'open'})

  }
  connectedCallback() {
    console.log('connected',(this.attributes[0]))
    console.log((this.getAttribute('attached')))
    if (this.attributes[0]) {
      console.log('DONE')
      return
    }
    window.viewModel= { page: 'home' }
    //this.setAttribute('page','home')
    let tag = 'my-app'
    let innerHTML = `
        <can-import from="~/application/view.js" export-as="viewModel" />
        <div class="container">
        <h1> Main Application </h1>
        <button on:click="key()">my button</button>
        {{#switch(page)}}
          {{#case("home")}}
              <components-report></components-report>
          {{/case}}
          {{#case("manager")}}
              <button value="view">I am Manager </button>
          {{/case}}
          {{#case("login")}}
              <login-element></login-element>
          {{/case}}
          {{#default()}}
              You do not have permission!
          {{/default}}
        {{/switch}}
      </div>
      <p class="text-center small">Get Suppdort by <a href="#">{{page}}</a></p>
    `
    let template = document.createElement('div')
    template.setAttribute('type',"text/stache")
    template.setAttribute('id','myTemplate')
    template.setAttribute('can-autorender',"")
    template.innerHTML = innerHTML

    let script = document.createElement('script')
    script.setAttribute('src','./node_modules/steal/steal.js')

    script.setAttribute('main','can-view-autorender')
    //script.setAttribute('deps-bundle','')
    this.appendChild(template)
    this.parentNode.appendChild(script)


    // Init ViewModel
    let ViewModel = defineMap.extend('viewModel',{ sealed: false },{
      attached: 'any',
      page: {
        value: ''
      },
      visible: {
        value: true
      },
      key() {
        if (this.page === 'login') {
          steal.import('login/')
        }
        if (this.page === 'home') {

        }
        if (this.page === "home") {
          this.page = "manager"
        } else {
          this.page = "home"
        }
      }
    })
    //canViewScope(template,ViewModel)
    /*
    let view = stache(innerHTML);
    this.tag = tag;
    // Registers can view Callbacks unneeded later
    Component.extend({ tag, view, ViewModel,
      events: {
        click: function(){
          this.viewModel.visible = !this.viewModel.visible;
        }
      }
    });


   let selectedTags = document.querySelectorAll('my-app')
   let el = selectedTags[0]

   let fragment = stache.async(el.outerHTML).then(t=>t(canViewModel(el.parentNode))).then(fragment=>{
     fragment.firstElementChild.setAttribute('attached','')

     el.parentNode.appendChild(fragment)
   })
   */
  }
};
customElements.define('my-app', myApp);
