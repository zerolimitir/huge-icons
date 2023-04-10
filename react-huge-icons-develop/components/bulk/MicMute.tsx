import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicMute = (
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
        <path fill='currentColor' d='M7 7a5 5 0 0 1 10 0v7a5 5 0 0 1-10 0V7Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M4.75 12a.75.75 0 0 0-1.5 0v2a8.75 8.75 0 0 0 15.39 5.7l1.83 1.83a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 1.06L7 8v6a5 5 0 0 0 8.974 3.035l1.6 1.6A7.25 7.25 0 0 1 4.75 14v-2Z'
        />
        <path
            fill='currentColor'
            d='M19.25 14v-2a.75.75 0 0 1 1.5 0v2a8.71 8.71 0 0 1-1.224 4.466l-1.102-1.103A7.218 7.218 0 0 0 19.25 14Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicMute);
export default ForwardRef;
