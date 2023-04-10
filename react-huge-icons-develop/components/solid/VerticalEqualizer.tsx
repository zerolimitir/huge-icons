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
            d='M18.75 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V2ZM8 13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6.75V2a.75.75 0 0 0-1.5 0v3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4Zm12 6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.25v3a.75.75 0 0 0 1.5 0v-3H20ZM6 15.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalEqualizer);
export default ForwardRef;
