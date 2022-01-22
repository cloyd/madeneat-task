import { FC, memo } from "react";

type NavButtonProps = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

const NavButton: FC<NavButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => (
  <li>
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  </li>
);

export default memo(NavButton);
