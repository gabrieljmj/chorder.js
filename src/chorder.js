import FormTemplate from './form-template'

function deleteElement(element) {
  element.outerHTML = ''
}

export default class Chorder {
  init() {
    Array.from(document.querySelectorAll('div[cd]')).forEach(cd => {
      const name = cd.getAttribute('cd')
      const originalTemplateEl = cd.querySelector('div[cd-template]')
      const template = new FormTemplate(name, originalTemplateEl)
      const number = cd.dataset.initialNumber || 1

      this.__createInitials(cd, template, number);
      this.__applyEvents(cd, template)
      deleteElement(originalTemplateEl)
    })
  }

  appendToData(chorderElement, templateElement) {
    chorderElement
      .querySelector('*[cd-data]')
      .append(templateElement.build())
  }

  getData(name) {
    const data = []
    const cd = document.querySelector('*[cd="' + name + '"]')

    Array.from(cd.querySelectorAll('*[data-' + name + ']')).forEach(el => {
      let _data = {}
      
      Array.from(el.querySelectorAll('*[cd-field]')).forEach(field => {
        _data[field.dataset.cdName] = field.value
      })
      
      data.push(_data)
    })
    
    return data
  }

  __createInitials(cd, template, n) {
    for (let i = 1; i <= n; i++) {
      this.appendToData(cd, template)
    }
  }

  __applyEvents(cd, template) {
    const addBtn = cd.querySelector('*[cd-add]')

    addBtn.onclick = e => {
      e.preventDefault()
      
      this.appendToData(cd, template)
    }
  }
}
