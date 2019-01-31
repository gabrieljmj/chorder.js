export default class FormTemplate {
  constructor(name, template) {
    this.name = name
    this._cloneFromTemplate(template)
  }

  build(n) {
    const clone = this.template.cloneNode(true)
    clone.dataset[this.name] = n
    
    Array.from(clone.querySelectorAll('*[cd-field]')).forEach(field => {
      const name = field.dataset.cdName;
      field.setAttribute('name', `${this.name}[${name}][]`)
    })
    
    clone.querySelector('button[cd-remove]').onclick = e => {
      clone.outerHTML = ''
    }
    
    return clone
  }

  _cloneFromTemplate(template) {
    if (!template.hasAttribute('cd-template')) {
      throw new Error('Invalid template. Add the \'cd-template\' parameter.')
    }

    this.template = template.cloneNode(true)
  }
}
