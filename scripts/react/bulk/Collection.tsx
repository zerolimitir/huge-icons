import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCollection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.62 7.041a2.043 2.043 0 0 0-1.512 1.315c-.076.205-.085.328-.099 1.434L3.994 11h16.012l-.015-1.21c-.014-1.106-.023-1.229-.099-1.434a2.101 2.101 0 0 0-1.242-1.248l-.23-.088-6.32-.006c-3.476-.003-6.392.009-6.48.027m4.08 6.275a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCollection);
export default ForwardRef;
