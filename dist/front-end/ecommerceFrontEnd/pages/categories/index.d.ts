declare function categories({ products, sections }: any): any;
export declare const getServerSideProps: (context: any) => Promise<{
    props: {
        products: any;
        sections: any;
    };
}>;
export default categories;
