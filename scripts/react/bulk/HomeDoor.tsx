import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeDoor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 14.062c-1.642.351-2.839 1.552-3.176 3.186-.054.26-.064.655-.064 2.53V22h8.004l-.013-2.35-.013-2.35-.11-.36c-.471-1.528-1.59-2.562-3.116-2.876-.379-.079-1.15-.079-1.512-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeDoor);
export default ForwardRef;
