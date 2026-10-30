"use client"

/* 
    SearchBox component written by Noah, 28/10/2026.
    Very simple search box component that lifts the state up to the student portal. 
    Student names are filtered as you type, and case / char location in the string does not matter.
    Should not own any data from the actual student lists.
    Styling choices were made to stay in line with the rest of the site.
*/
interface SearchBoxProps {
  query: string;
  onQuery: (searchedName: string) => void;
}

const SearchBox = ({ query, onQuery }: SearchBoxProps) => { //lift that state out of here

    return (
        <div className="flex w-full justify-center px-5 py-5">
            <input
            type="text"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Student Name"
            className="w-full rounded-lg border border-slate-500 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
};
export default SearchBox;