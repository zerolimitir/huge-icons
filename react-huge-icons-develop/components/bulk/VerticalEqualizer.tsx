import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalEqualizer = (
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
            d='M18 18.985h.75V22a.75.75 0 0 1-1.5 0v-3.015H18ZM18 1.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-12 13a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75ZM6 1.415a.75.75 0 0 1 .75.75v2.828h-1.5V2.165a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M22 17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4Zm-12-6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalEqualizer);
export default ForwardRef;
