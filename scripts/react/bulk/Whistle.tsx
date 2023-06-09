import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWhistle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.807 2.289a.654.654 0 0 0-.326.19c-.218.218-.251.42-.234 1.414.015.895.029.95.29 1.179.34.299.874.186 1.123-.236.071-.121.081-.223.094-.945.014-.887-.019-1.152-.173-1.353-.166-.217-.468-.315-.774-.249m-5 1.999c-.376.083-.606.484-.517.902.037.172.099.249.645.805.369.376.667.644.765.689a.74.74 0 0 0 1.004-.938c-.095-.251-1.264-1.403-1.464-1.444l-.2-.04a.841.841 0 0 0-.233.026m9.994.002c-.159.034-.252.11-.809.661-.693.683-.779.818-.742 1.149a.74.74 0 0 0 1.05.584c.098-.045.396-.313.765-.689.548-.557.608-.633.645-.806.124-.582-.323-1.024-.909-.899m-5.561 5.771c0 .868.011 1.089.062 1.21a.748.748 0 0 0 1.396 0c.051-.121.062-.342.062-1.21V9h-1.52v1.061m-5.802 3.014a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 10 15c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhistle);
export default ForwardRef;
