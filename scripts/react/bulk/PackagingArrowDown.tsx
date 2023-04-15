import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m4.727 8.257a.734.734 0 0 0-.398.413c-.054.128-.062.468-.062 2.499v2.351l-.41-.408c-.229-.228-.476-.435-.559-.469-.685-.284-1.312.471-.918 1.106.123.199 1.478 1.524 1.707 1.668.263.167.652.284.94.284.288 0 .677-.117.94-.284.286-.18 1.642-1.534 1.74-1.737.193-.399.032-.832-.38-1.023-.366-.17-.583-.083-1.126.452l-.414.407-.001-2.357c-.001-2.207-.005-2.368-.075-2.518-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingArrowDown);
export default ForwardRef;
