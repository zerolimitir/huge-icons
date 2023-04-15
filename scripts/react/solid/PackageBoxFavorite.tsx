import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7 2.061c-.624.1-1.249.37-1.773.765-.405.306-2.305 2.236-2.514 2.554-.192.293-.433.748-.433.819 0 .028 3.087.041 9.72.041 6.633 0 9.72-.013 9.72-.041 0-.071-.241-.526-.433-.819-.208-.316-2.108-2.248-2.51-2.55a4.353 4.353 0 0 0-1.573-.739c-.236-.059-.765-.067-5.064-.075-3.899-.008-4.864.001-5.14.045M2.01 13.21l.012 5.45.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392.011-5.43.011-5.43H15v5.241L13.5 12 12 10.999 10.5 12 9 13.001V7.76H1.998l.012 5.45'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxFavorite);
export default ForwardRef;
