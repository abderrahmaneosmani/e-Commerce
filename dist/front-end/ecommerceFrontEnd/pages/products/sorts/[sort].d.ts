declare function sortProducts({ products }: any): any;
export declare const getServerSideProps: (context: any) => Promise<{
    props: {
        products: any;
    };
}>;
export default sortProducts;
