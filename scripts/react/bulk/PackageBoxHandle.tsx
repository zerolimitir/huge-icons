import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxHandle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.011 2.523c-.626.06-1.33.318-1.863.682-.23.157-3.068 2.411-3.408 2.707-.196.171-.459.49-.46.558 0 .04.698.05 3.36.05H9V9.5c0 1.639.009 2.98.02 2.98.011 0 .686-.444 1.5-.987l1.48-.986 1.48.986c.814.543 1.489.987 1.5.987.011 0 .02-1.341.02-2.98V6.52h3.36c2.662 0 3.36-.01 3.36-.05-.001-.068-.264-.387-.46-.558a235.367 235.367 0 0 0-3.367-2.684c-.276-.201-.883-.484-1.255-.586a5.14 5.14 0 0 0-.7-.121c-.475-.046-7.448-.045-7.927.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxHandle);
export default ForwardRef;
