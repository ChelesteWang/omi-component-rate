import { tag, WeElement, h, extractClass, render } from 'omi'
import '@omiu/o-icon'
import * as css from './index.scss'

interface Props {
  value?: Number
  max?: Number
  precision?: Number
  readonly?: Boolean
  disabled?: Boolean
  icon?: String,
  color?: String,
  svg?: String,
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
    value: Number,
    max: Number,
    precision: Number,
    // readonly: Boolean,
    // disabled: Boolean,
    icon: String,
    color: String,
    svg: String,
  }

  onMouseover = (evt) => {
    this.props.color = "red"
    // this.props.value = this.props.value + 1
    
    console.log("onMouseover", this.props.color)
    this.update()
  }

  onMouseout = (evt) => {
    this.props.color = "#f7e620"
    // this.props.value = this.props.value - 1
    console.log("onMouseout", this.props.color)
    this.update()
  }

  render(props) {
    let fullnum = Array.from({ length: Math.floor(props.value) }, (v, k) => k + 1);
    let emptynum = Array.from({ length: Math.floor(props.max) }, (v, k) => k + 1)
    return (

      <div style="position: relative;">
        <span class="rate">
          {emptynum.map(() =>
            <span class="rate-empty" onMouseover={this.onMouseover} onMouseout={this.onMouseout}>
              <o-icon view='24' color="#ccc" scale='2'
                path={props.svg} >
              </o-icon>
            </span>
          )}
        </span>
        <span class="rate">{fullnum.map(() =>
          <span class="rate-full">
            <o-icon view='24' color={props.color} scale='2'
              path={props.svg} >
            </o-icon>
          </span>
        )}</span>
      </div>
    )
  }
}

render(<o-rate value={1}></o-rate>, '#root', {
  ignoreAttrs: true
})
