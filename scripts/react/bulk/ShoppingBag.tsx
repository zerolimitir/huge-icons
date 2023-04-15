import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.698 5.315a.803.803 0 0 0-.422.481c-.03.103-.039.424-.026.988.022.947.075 1.216.352 1.81.203.432.439.758.804 1.109.359.345.581.499 1.007.698.556.261.917.337 1.587.337.67 0 1.031-.076 1.587-.337.426-.199.648-.353 1.007-.698.365-.351.601-.677.804-1.109.277-.594.33-.863.352-1.81.021-.91.001-1.054-.179-1.268a.849.849 0 0 0-.562-.275.88.88 0 0 0-.522.211c-.207.193-.224.273-.25 1.168-.022.763-.034.864-.124 1.105-.269.716-.743 1.173-1.473 1.42-.305.103-.975.103-1.28 0-.63-.213-1.094-.609-1.357-1.157-.204-.424-.243-.66-.244-1.465-.001-.559-.012-.688-.075-.823-.181-.392-.605-.558-.986-.385'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBag);
export default ForwardRef;
