"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SearchContainer({ onSearch }) {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) { onSearch(query) };
        console.log("Search submitted:", query);
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <motion.input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                animate={{ width: focused ? '25rem' : '15rem' }}
                className=" w-full pr-4 pl-10 py-2 rounded-full border border-gray-300 focus:border-gray-500 focus:outline-none shadow-sm transition dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400 dark:focus:border-gray-400
        "
                aria-label="Search"
            />
            <button
                type="submit"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Submit search"
            >
                <Search className="h-5 w-5" />
            </button>
        </form>
    );
}
