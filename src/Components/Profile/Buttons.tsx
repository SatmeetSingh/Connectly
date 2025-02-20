import Button from '../../utils/Button';
import React from 'react';
import { LuUserPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export default function Buttons() {
  return (
    <div className="flex align-middle items-center gap-2">
      <Button>
        <Link to="editProfile" className="text-[12px] font-bold ">
          <span className="whitespace-nowrap">Edit Profile</span>
        </Link>
      </Button>
      <Button>
        <Link to="editProfile" className="text-[12px] font-bold">
          Share
        </Link>
      </Button>
      <Button>
        <Link to="editProfile" className="text-[12px] font-bold">
          <LuUserPlus size={24} />
        </Link>
      </Button>
    </div>
  );
}

interface IOtherButtonProp {
  isLoading: boolean;
  isSuccess: boolean;
  handleFollow: () => void;
  handleUnFollow: () => void;
}

export const OtherUserButtons: React.FC<IOtherButtonProp> = ({
  isLoading,
  isSuccess,
  handleFollow,
  handleUnFollow,
}) => {
  return (
    <div className="flex align-middle items-center gap-2">
      <button
        className="border-[1px] px-2 py-[1px] bg-gray-200 rounded-md"
        onClick={isSuccess ? handleUnFollow : handleFollow}
        disabled={isLoading}
      >
        <span className="whitespace-nowrap text-[12px] font-bold">
          {isSuccess ? 'Unfollow' : 'Follow'}
        </span>
      </button>
      <Button>
        <Link to="editProfile" className="text-[12px] font-bold">
          Message
        </Link>
      </Button>
      <Button>
        <Link to="editProfile" className="text-[12px] font-bold">
          <LuUserPlus size={24} />
        </Link>
      </Button>
    </div>
  );
};
