
const Blogs = () => {
    return (
        <div className="container">
            <div className="mx-auto my-10 shadow-lg p-10">
                <h2 className="font-bold text-3xl w-70">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                <p>
                    Web Storage (Local Storage and Session Storage)
                    Cookies (Session Cookies & Persistent Cookies)
                    IndexedDB.
                    Cache API.
                    File system storage.

                </p>
            </div>

            <div className="mx-auto my-10 shadow-lg p-10">
                <h2 className="font-bold text-3xl">Compare SQL and NoSQL databases?</h2>

                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p> 
            </div>

            <div className="mx-auto my-10 shadow-lg p-10">
                <h2 className="font-bold text-3xl">What is express js? What is Nest JS ?</h2>

                <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>   
            </div>

            <div className="mx-auto my-10 shadow-lg p-10">
                <h2 className="font-bold text-3xl">What is MongoDB aggregate and how does it work ?</h2>

                <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>   
            </div>
        </div>
    );
};

export default Blogs;