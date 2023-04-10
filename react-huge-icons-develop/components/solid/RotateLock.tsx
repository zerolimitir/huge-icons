import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRotateLock = (
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
            d='M2.75 12a9.25 9.25 0 0 1 18.44-1.06l-1.953-.651a.75.75 0 0 0-.474 1.422l3 1A.75.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75a10.75 10.75 0 0 0 9.632-5.972.75.75 0 0 0-1.343-.667A9.25 9.25 0 0 1 2.75 12ZM12 7.75c-.69 0-1.25.56-1.25 1.25v1h2.5V9c0-.69-.56-1.25-1.25-1.25ZM9.25 10c0 .048.004.095.013.14A2 2 0 0 0 8 12v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-1.263-1.86.752.752 0 0 0 .013-.14V9a2.75 2.75 0 1 0-5.5 0v1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRotateLock);
export default ForwardRef;
