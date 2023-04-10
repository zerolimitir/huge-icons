import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWaves = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4.5 5.25a2.25 2.25 0 0 1 2.25 2.25v5a.75.75 0 0 0 1.5 0 2.25 2.25 0 0 1 2.25-2.25H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0v-5a.75.75 0 0 0-1.5 0v.5A2.75 2.75 0 0 1 7 12.75H6a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25v-.5a2.25 2.25 0 0 1 2.25-2.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWaves);
export default ForwardRef;
