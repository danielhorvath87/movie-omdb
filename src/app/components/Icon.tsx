import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart as heart2 } from '@fortawesome/free-regular-svg-icons';
import {
  faAddressCard,
  faCircleUser,
  faEye,
  faEyeSlash,
  faFloppyDisk,
  faGauge,
  faGear, faHeart as heart1, faHome,
  faIdCardClip,
  faLayerGroup,
  faPenToSquare,
  faPlus,
  faRectangleList,
  faRightFromBracket,
  faRotate, faSearch, faStar, faSwatchbook,
  faTrash,
  faUnlockKeyhole,
  faUsersGear,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '@mui/material';
import { FC } from 'react';

// https://fontawesome.com/search?o=r&m=free

const Icon: FC<{ icon: string; size?: SizeProp; color?: string }> = ({
  icon,
  size = 'lg',
  color = colors.grey[900],
}) => {
  return (
    <>
      {icon.includes('dashboard') && <FontAwesomeIcon icon={faGauge} size={size} color={color} />}
      {icon.includes('home') && <FontAwesomeIcon icon={faHome} size={size} color={color} />}
      {icon.includes('layouts') && <FontAwesomeIcon icon={faLayerGroup} color={color} />}
      {icon.includes('list2') && (
        <FontAwesomeIcon icon={faRectangleList} size={size} color={color} />
      )}
      {icon.includes('circleUser') && (
        <FontAwesomeIcon icon={faCircleUser} size={size} color={color} />
      )}
      {icon.includes('profile') && (
        <FontAwesomeIcon icon={faAddressCard} size={size} color={color} />
      )}
      {icon.includes('users') && <FontAwesomeIcon icon={faUsersGear} size={size} color={color} />}
      {icon.includes('signout') && (
        <FontAwesomeIcon icon={faRightFromBracket} size={size} color={color} />
      )}
      {icon.includes('idcardClip') && (
        <FontAwesomeIcon icon={faIdCardClip} size={size} color={color} />
      )}
      {icon.includes('edit') && <FontAwesomeIcon icon={faPenToSquare} color={color} />}
      {icon.includes('delete') && <FontAwesomeIcon icon={faTrash} color={color} />}
      {icon.includes('plus') && <FontAwesomeIcon icon={faPlus} color={color} />}
      {icon.includes('save') && <FontAwesomeIcon icon={faFloppyDisk} color={color} />}
      {icon.includes('rotate') && <FontAwesomeIcon icon={faRotate} color={color} />}
      {icon.includes('x') && <FontAwesomeIcon icon={faXmark} color={color} />}
      {icon.includes('gear') && <FontAwesomeIcon icon={faGear} color={color} />}
      {icon.includes('roles') && <FontAwesomeIcon icon={faUsersGear} color={color} />}
      {icon.includes('permissions') && <FontAwesomeIcon icon={faUnlockKeyhole} color={color} />}
      {icon.includes('wholesales') && <FontAwesomeIcon icon={faSwatchbook} color={color} />}
      {icon.includes('show') && <FontAwesomeIcon icon={faEye} color={color} />}
      {icon.includes('hidden') && <FontAwesomeIcon icon={faEyeSlash} color={color} />}
      {icon.includes('search') && <FontAwesomeIcon icon={faSearch} color={color} />}

      {icon.includes('heart1') && <FontAwesomeIcon icon={heart1} color={color} />}
      {icon.includes('heart2') && <FontAwesomeIcon icon={heart2} color={color} />}
      {icon.includes('star') && <FontAwesomeIcon icon={faStar} color={color} />}

    </>
  );
};

export default Icon;
