import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBus = (
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
            d='M6 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3Zm8 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M3 15a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.01 4.757A3.04 3.04 0 0 0 5 5v1.257H4c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 1 4 4.757h1.01ZM19 6.257V5c0-.082-.003-.163-.01-.243H20a2.75 2.75 0 0 1 2.75 2.75v1a.75.75 0 0 1-1.5 0v-1c0-.69-.56-1.25-1.25-1.25h-1Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.01 4.757h13.98A3 3 0 0 0 16 2H8a3 3 0 0 0-2.99 2.757ZM19 6.257h-6.25V13H19V6.257ZM11.25 13V6.257H5V13h6.25Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBus);
export default ForwardRef;
