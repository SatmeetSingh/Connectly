import Button from '../../utils/Button';
import React from 'react';
import { LuUserPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export default function Buttons() {
  return (
    <div>
      <div className="flex align-middle items-center gap-2">
        <Button>
          <Link to="editProfile" className="max-lg:text-[10px] ">
            <span className="whitespace-nowrap">Edit Profile</span>
          </Link>
        </Button>
        <Button>
          <Link to="editProfile" className="max-lg:text-[10px]">
            Share
          </Link>
        </Button>
        <Button>
          <Link to="editProfile" className="max-lg:text-[10px] ">
            <LuUserPlus size={24} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
