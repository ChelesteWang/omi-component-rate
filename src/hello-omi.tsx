import { tag, WeElement, h, extractClass } from 'omi'
// import * as css from './index.scss'
// import '@omiu/icon/star'

interface Props {
  value?: Number
  max?: Number
  precision?: Number
  readonly?: Boolean
  disabled?: Boolean
  icon?: String
}

@tag('o-rate')
export default class Rate extends WeElement<Props> {
  // static css = css

  static defaultProps = {
    value: 0,
    max: 5,
    precision: 1,
    readonly: false,
    disabled: false,
  }

  static propTypes = {
    value: Number,
    max: Number,
    precision: Number,
    readonly: Boolean,
    disabled: Boolean,
    icon: String,
  }

  render(props) {
    return (
      <div>
        <span>
          hello world
        </span>
        <span></span>
      </div>
    )
  }
}
