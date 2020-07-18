//import deepmerge from 'deepmerge'
import Element from 'can-element'
import define from 'can-define'
import stache from 'can-stache'
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

let view = stache(innerHTML)


export default class myAppS extends Element.Element {
  constructor() {
    super()
    define(this, {
      page: {
          value: "world"
      }
    });
  }
  static get view() {
      return view;
  }
};
customElements.define('my-element', myAppS);
