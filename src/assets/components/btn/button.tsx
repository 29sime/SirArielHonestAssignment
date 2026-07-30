import React from 'react';

type btnProps = {
  buttonVariant?: string;
  text?: string;
};

export function BTN({ buttonVariant = "bg-[#5a3814]", text = "Read More" }: btnProps) {
  return (
    <button className={` mt-10 px-6 py-3  text-white font-medium transition-colors ${buttonVariant}`}>
      {text}
    </button>
  );
}

export default BTN; 