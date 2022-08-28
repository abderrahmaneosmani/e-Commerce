declare function getProductById({ product }: any): any;
export declare const getServerSideProps: (context: any) => Promise<{
    props: {
        product: any;
    };
}>;
export default getProductById;
