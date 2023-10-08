import React, {useState, useEffect} from "react";

import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return (
            data.map((post) => <Card key={post._id} {...post} />)
        );
    }

    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    );
};

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState(null);

    return (
        <section className="max-w-7xl mx-auto">
            <div className={"flex items-center flex-col"}>
                <h1 className="font-extrabold text-alabaster text-5xl">The Community Showcase</h1>
            </div>

            <div className="mt-10">
                <FormField
                    type="text"
                    name="text"
                    placeholder="Search something..."
                    value={searchText}
                />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="font-medium text-[#666e75] text-xl mb-3">
                                Showing Results for <span className="text-[#222328]">{searchText}</span>:
                            </h2>
                        )}
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {searchText ? (
                                <RenderCards
                                    data={searchedResults}
                                    title="No Search Results Found"
                                />
                            ) : (
                                <RenderCards
                                    data={allPosts}
                                    title="No Posts Yet"
                                />
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
  );
}

export default Home;