import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatting = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.377 8.235a6.82 6.82 0 0 1-.982 5.305 6.59 6.59 0 0 1-4.429 2.862c-.415.071-.656.078-2.79.078-1.358 0-2.336.015-2.336.036 0 .071.284.709.45 1.014.447.816 1.236 1.704 1.99 2.24.69.492 1.666.917 2.493 1.088.646.132 1.102.145 4.787.133 3.62-.011 3.662-.012 3.882-.096.551-.211.872-.455 1.156-.879.382-.572.378-.541.394-2.836.019-2.656-.032-3.185-.412-4.329-.637-1.913-1.968-3.485-3.783-4.466-.327-.176-.467-.226-.42-.15'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatting);
export default ForwardRef;
