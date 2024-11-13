import {
  removeSvg,
  clearSvg,
  cancelSvg,
  startSvg,
  pauseSvg,
  completedSvg,
  saveSvg,
  editSvg,
  clearFieldSvg,
  plusSvg,
} from '../../assets/icons'

import * as Styled from './styled'

import type { ToolbarButton } from 'types'

const BUTTON_ICONS_PATHS: { [name: string]: string } = {
  plus: plusSvg,
  remove: removeSvg,
  clear: clearSvg,
  cancel: cancelSvg,
  start: startSvg,
  pause: pauseSvg,
  completed: completedSvg,
  save: saveSvg,
  edit: editSvg,
  clearField: clearFieldSvg,
}

export default function CustomButton({ icon, disabled = false, onClick }: ToolbarButton) {
  const iconPath = BUTTON_ICONS_PATHS[icon] ?? null

  const buttonClickHandler = () => {
    if (disabled) return
    onClick()
  }

  if (iconPath === null) return null

  return (
    <Styled.CustomButton $disabled={disabled} onClick={buttonClickHandler}>
      <img src={BUTTON_ICONS_PATHS[icon]} alt={icon} width={24} height={24} />
      {/* { label && <span className="custom-button__label">{ label }</span> } */}
    </Styled.CustomButton>
  )
}
