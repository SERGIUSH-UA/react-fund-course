import React from 'react';
import DefInput from "./UI/input/DefInput";
import DefSelect from "./UI/select/DefSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <DefInput placeholder="Search..." type="text"
                      value={filter.query}
                      onChange={e => setFilter({...filter ,query: e.target.value})}/>
            <DefSelect defaultValue="Sort by" value={filter.sort}
                       options={[
                           {value: "title", name: "By name"},
                           {value: "body", name: "By description"}
                       ]}
                       onChange={selectedSort => setFilter({...filter, sort: selectedSort})}/>
        </div>
    );
};

export default PostFilter;
