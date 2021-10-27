import './index.less'
import './importOnly'
class Test {
  constructor() {
    this.renderDiv()
  }

  renderDiv() {
    setTimeout(() =>{
      const div = document.createElement('div')
      div.className = 'test'
      div.innerHTML = 'hello world'
      document.body.append(div)
    })
  }
}

new Test()
