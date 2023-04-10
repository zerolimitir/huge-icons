import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicroscope = (
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
            d='M14.75 7.527A5.25 5.25 0 0 1 12 17.25H8a.75.75 0 0 0 0 1.5h3.25v2.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-2.541a6.751 6.751 0 0 0 2-12.875v1.693Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 12.75V14a.75.75 0 0 0 1.5 0v-1.25h-1.5ZM12 1.25a.75.75 0 0 1 .75.75v1.25h-1.5V2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M9.25 5c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 13 12.75h-2A1.75 1.75 0 0 1 9.25 11V5Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicroscope);
export default ForwardRef;
