import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonHtmlProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

export const ButtonHtmlProps = ({
  children,
  type = 'button',
  ...props
}: IButtonHtmlProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default ButtonHtmlProps;
