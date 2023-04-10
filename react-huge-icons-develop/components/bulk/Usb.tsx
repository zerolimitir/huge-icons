import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsb = (
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
            fillRule='evenodd'
            d='M12 3.25a.75.75 0 0 1 .75.75v6.96l4.33-1.444a.25.25 0 0 0 .17-.237V6a.75.75 0 0 1 1.5 0v3.28a1.75 1.75 0 0 1-1.197 1.66l-4.803 1.6V19a.75.75 0 0 1-1.5 0v-4.46l-4.803-1.6a1.75 1.75 0 0 1-1.197-1.66V8a.75.75 0 0 1 1.5 0v3.28a.25.25 0 0 0 .17.236l4.33 1.443V4a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-2a1 1 0 0 1-.8-1.6ZM19.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
