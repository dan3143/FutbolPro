import { FC } from 'react';

interface SearchBarProps {
  placeholder: string;
  filter: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, filter }) => (
  <input
    className="mb-10 w-full p-5 text-xl rounded border-2 border-gray-300 focus:border-transparent"
    placeholder={placeholder}
    type="text"
    onChange={(e) => filter(e.target.value)}
  />
);

export { SearchBar };
