import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPhoneLock = (
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
            d='M15 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16 13.75c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0v-2a2.75 2.75 0 1 1 5.5 0v2a.75.75 0 0 1-1.5 0v-2c0-.69-.56-1.25-1.25-1.25Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 16h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPhoneLock);
export default ForwardRef;
