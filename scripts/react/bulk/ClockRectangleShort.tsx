import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClockRectangleShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 8.316a.734.734 0 0 0-.398.413c-.052.124-.062.371-.062 1.501 0 1.474.02 1.653.229 2.009.247.421.401.534 1.43 1.049.938.469.966.48 1.171.459.476-.049.797-.523.651-.963-.091-.276-.218-.372-1.042-.784-.433-.217-.818-.424-.854-.46-.057-.058-.065-.218-.066-1.373-.001-1.185-.008-1.322-.075-1.467-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockRectangleShort);
export default ForwardRef;
