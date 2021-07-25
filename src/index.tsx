import { tag, WeElement, h, extractClass, render } from 'omi'
import '@omiu/o-icon'
import state from './utils'
import * as css from './index.scss'

interface Props {
  value?: Number
  max?: Number
  precision?: Number
  readonly?: Boolean
  disabled?: Boolean
  icon?: String,
  color?: String,
  svg?: String
}

@tag('o-rate')
export default class Rate extends WeElement<Props> {
  static css = css.default;

  static defaultProps = {
    size: 10,
    value: 0,
    max: 5,
    precision: 1,
    // readonly: false,
    // disabled: false,
    color: '#f7e620',
    svg: 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
  }

  static propTypes = {
    value: Number,    // 默认是有几个
    max: Number,      // 一共有多少
    precision: Number,
    // readonly: Boolean,
    // disabled: Boolean,
    icon: String,
    color: String,
    svg: String,
  }

  constructor() {
    super();
    (this as any).state = state({
      value: this.props.value
    }, this)
  }

  onMouseover = (evt) => {
    (this as any).state.value = evt.target.dataset['rate']
  }
  onMouseout = () => {
    (this as any).state.value = this.props.value
  }

  submit(index) {
    this.updateProps({
      value: index
    })
  }

  render(props) {
    const value = (this as any).state.value
    let emptynum = Array.from({ length: Math.floor(props.max) }, (v, k) => k + 1)

    function getCls(value: number, max: number): string {
      if (value <= max) return '#f7e620'
      if (value > max) return '#ccc'
      // return 'half'
    }

    return (
      <div className="rating">
        {
          emptynum.map((rate, index) => (
            <o-icon view='24' color={getCls(index, value)} scale='2'
              path={props.svg} onMouseover={this.onMouseover} onMouseout={this.onMouseout} onClick={this.submit.bind(this, index)} data-rate={index}>
            </o-icon>
          )
          )
        }
      </div>
    )
  }
}

render(<o-rate value={1}></o-rate>, '#root', {
  ignoreAttrs: true
})
