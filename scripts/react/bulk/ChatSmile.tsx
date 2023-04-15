import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.762 13.292c-.2.064-.418.3-.48.519-.104.374.028.621.654 1.217.502.478.929.789 1.472 1.071 1.387.721 2.865.851 4.29.377a6.523 6.523 0 0 0 1.633-.824c.387-.275 1.23-1.093 1.332-1.292a.879.879 0 0 0 .003-.688.775.775 0 0 0-.866-.393c-.147.04-.251.121-.567.442-.451.461-.885.793-1.346 1.033-1.738.904-3.603.527-5.127-1.035-.459-.472-.63-.544-.998-.427'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSmile);
export default ForwardRef;
