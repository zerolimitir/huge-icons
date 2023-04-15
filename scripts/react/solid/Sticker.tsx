import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSticker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v11.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.388.079.533.083 3.21.083h2.804l.001-2.01c.001-2.145.03-2.76.157-3.37a6.759 6.759 0 0 1 5.222-5.222c.611-.128 1.225-.156 3.372-.157l2.012-.001-.013-1.93-.014-1.93-.105-.385a4.033 4.033 0 0 0-1.603-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m11.747 8.775c-.536.085-.936.215-1.48.482-1.413.693-2.377 1.874-2.793 3.42l-.123.46-.014 1.76a87.908 87.908 0 0 0-.002 2.03l.012.271L17.02 16l4.24-4.24-1.88.004c-1.299.003-1.979.02-2.2.054'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSticker);
export default ForwardRef;
