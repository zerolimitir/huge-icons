import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.316c-.38.175-.551.586-.399.955.042.101.518.606 1.47 1.559l1.409 1.41H8.112c-4.28 0-6.129.013-6.274.044-.758.163-.758 1.269 0 1.432.145.031 1.994.044 6.274.044h6.068l-1.432 1.432c-1.302 1.303-1.436 1.449-1.49 1.628-.161.535.326 1.048.886.933.19-.039.259-.104 2.33-2.167 1.442-1.436 2.159-2.178 2.209-2.286a.661.661 0 0 0 .016-.571c-.085-.206-4.174-4.306-4.399-4.412a.667.667 0 0 0-.6-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInCircle);
export default ForwardRef;
