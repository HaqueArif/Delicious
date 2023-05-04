import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';



const Blog = () => {

    const [loader, setLoader] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.body');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            // const componentWidth = doc.internal.pageSize.getWidth();
            // const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, 210, 297);
            setLoader(false);
            doc.save('blog.pdf');
        })
    }

    return (

        <div className='bg-red-500 border-orange-200 border-t-2'>
            <h2 className='font-bold text-center text-white text-3xl my-10 lg:text-5xl'>Blog</h2>
            <div className='text-right px-5 lg:pr-40'>
                <p>Want to download ? </p>
                <button onClick={downloadPDF} disabled={!(loader === false)} className='btn-sm text-white rounded-xl shadow-lg bg-orange-300'> {loader ? "Downloading" : " Download"}</button>
            </div>
            <div className=' body lg:px-40  pb-20 pt-5 px-5  min-h-screen'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg mb-2">
                    <div className="collapse-title text-xl font-medium">
                        The differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p>In React, controlled components manage their state, while uncontrolled components don't. Controlled components offer more predictability, while uncontrolled components are simpler to use. The choice depends on the specific use case and the trade-off between control and simplicity.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg mb-2">
                    <div className="collapse-title text-xl font-medium">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p>To validate React props, use the prop-types module to define the expected types and shapes of the props. Set the propTypes property of the component to an object that defines the expected props and their types. This helps catch errors early on and provides better documentation.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg mb-2">
                    <div className="collapse-title text-xl font-medium">
                        The difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p>Node.js is a server-side JavaScript runtime that allows developers to run JavaScript code outside of a web browser. Express.js, on the other hand, is a web application framework for Node.js that provides a set of tools and features for building web applications and APIs. While Node.js provides the runtime environment for executing JavaScript on the server, Express.js provides a set of features, such as middleware, routing, and templating, to simplify the process of building web applications using Node.js. In summary, Node.js is the foundation, while Express.js is a framework built on top of Node.js that provides additional functionality for building web applications and APIs.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg mb-2">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>A custom hook is a function that allows you to reuse logic across multiple React components. You would create a custom hook to extract shared functionality into a reusable piece of code, making your code more modular and easier to maintain. Custom hooks can help simplify complex logic and reduce code duplication in your application.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;