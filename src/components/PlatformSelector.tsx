import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <div className="mb-3">
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectedPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default PlatformSelector;
