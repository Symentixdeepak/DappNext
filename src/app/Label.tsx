import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

interface LabelProps {
  className?: string;
  color?:
    | 'primary'
    | 'black'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info';
  children?: ReactNode;
}

const LabelWrapper = styled('span')(
  ({ theme }) => `
      background-color:#000;
      padding: ${theme.spacing(0.5, 0.8)};
      font-size: ${theme.typography.pxToRem(11)};
      border-radius:8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: ${theme.spacing(1.5)};
      
      &.MuiLabel {
        &-success {
          background-color:#a6f5ab;
          color:#0d8f06;
        }
              
        &-error {
          background-color:#f7cbc1;
          color:#f23c13;
        }
        
      }
`
);

const Label: FC<LabelProps> = ({
  className,
  color = 'secondary',
  children,
  ...rest
}) => {
  return (
    <LabelWrapper className={'MuiLabel-' + color} {...rest}>
      {children}
    </LabelWrapper>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'black',
    'secondary',
    'error',
    'warning',
    'success',
    'info'
  ])
};

export default Label;
