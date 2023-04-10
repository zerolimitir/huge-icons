import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartKey = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.697-3.885a.75.75 0 1 0 1.107-1.012l-1.107 1.012Zm-4.5 1.309a.75.75 0 0 0 1.107 1.012L9.945 9.174Zm-1.5-2.32a.75.75 0 1 0 1.107 1.011L8.446 6.853Zm4.5 3.332a.75.75 0 1 0 1.107-1.012l-1.108 1.012ZM18 22.75a.75.75 0 0 0 0-1.5v1.5ZM17.25 13a.75.75 0 0 0 1.5 0h-1.5ZM12 6.75c.941 0 1.807.416 2.447 1.115l1.107-1.012C14.656 5.873 13.401 5.25 12 5.25v1.5Zm-.947 3.436c.256-.28.591-.436.947-.436v-1.5c-.816 0-1.541.363-2.054.924l1.107 1.012Zm-1.5-2.32c.64-.7 1.505-1.116 2.447-1.116v-1.5c-1.402 0-2.657.623-3.554 1.603l1.108 1.012ZM12 9.75c.356 0 .69.156.946.436l1.107-1.012A2.777 2.777 0 0 0 12 8.25v1.5Zm-2-7h4v-1.5h-4v1.5Zm8 18.5h-8v1.5h8v-1.5ZM6.75 18V6h-1.5v12h1.5Zm10.5-12v7h1.5V6h-1.5ZM10 21.25A3.25 3.25 0 0 1 6.75 18h-1.5A4.75 4.75 0 0 0 10 22.75v-1.5Zm4-18.5A3.25 3.25 0 0 1 17.25 6h1.5A4.75 4.75 0 0 0 14 1.25v1.5Zm-4-1.5A4.75 4.75 0 0 0 5.25 6h1.5A3.25 3.25 0 0 1 10 2.75v-1.5Zm3.5 18.5h7v-1.5h-7v1.5Zm7-4.5h-7v1.5h7v-1.5Zm-7 0a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5Zm9.25 2.25a2.25 2.25 0 0 0-2.25-2.25v1.5a.75.75 0 0 1 .75.75h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm-7-1.5a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKey);
export default ForwardRef;
