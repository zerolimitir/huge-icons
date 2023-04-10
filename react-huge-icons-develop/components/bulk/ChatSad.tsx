import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatSad = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m8.6 16.45-.002.002A.75.75 0 0 1 7.4 15.55v-.001l.002-.001.002-.003.006-.008.02-.025.065-.08a6.695 6.695 0 0 1 1.127-1.039c.77-.56 1.921-1.143 3.378-1.143s2.608.583 3.379 1.143a6.697 6.697 0 0 1 1.126 1.039l.066.08.019.025.006.008.002.003.001.001.001.001a.75.75 0 0 1-1.198.902m0 0-.007-.009a3.912 3.912 0 0 0-.21-.237 5.199 5.199 0 0 0-.689-.6c-.604-.44-1.453-.856-2.496-.856s-1.892.417-2.496.857a5.2 5.2 0 0 0-.86.79 2.111 2.111 0 0 0-.038.046l-.008.01.002-.003m6.802.002-.001-.001-.006-.008.006.008v.001Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSad);
export default ForwardRef;
