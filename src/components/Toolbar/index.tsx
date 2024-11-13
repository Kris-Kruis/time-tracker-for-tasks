import { memo } from 'react';

import CustomButton from 'components/CustomButton'

import * as Styled from './styled'

import type { ToolbarButton } from 'types'

type ToolbarProps = {
  buttons: ToolbarButton[];
  className?: string;
}

const Toolbar: React.ComponentType<ToolbarProps> = ({ buttons, className }) => {
  return (
    <Styled.Toolbar className={className}>
      {buttons.map(({ icon, disabled, onClick }) => (
        <CustomButton
          key={icon}
          icon={icon}
          disabled={disabled}
          onClick={onClick}
        />
      ))}
    </Styled.Toolbar>
  )
}

export default memo(Toolbar)
