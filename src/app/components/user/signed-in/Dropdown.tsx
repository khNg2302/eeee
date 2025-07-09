import { DropDownContainer } from "@/components/DropDown";
import { useToggle } from "@/hooks/useToggle";
import { useSignedInProvider } from ".";

export const SignedInDropdown = () => {
  const { isOpen, handleClose, handleOpen } = useToggle();
  const { handleOpenProfile } = useSignedInProvider();

  const handleItemClick = () => {
    handleClose();
  };

  return (
    <div className="flex">
      <DropDownContainer>
        <button onClick={handleOpen}>User</button>
        <DropDownContainer.Content isOpen={isOpen} handleClose={handleClose}>
          <DropDownContainer.Item
            label="@username"
            onClick={() => {
              handleItemClick();
              handleOpenProfile();
            }}
          />
          <DropDownContainer.Item label="Log out" />
        </DropDownContainer.Content>
      </DropDownContainer>
    </div>
  );
};
