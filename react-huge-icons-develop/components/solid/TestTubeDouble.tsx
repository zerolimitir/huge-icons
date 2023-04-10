import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTestTubeDouble = (
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
            d='M13.25 3a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-.5V9h-4V3.75H14a.75.75 0 0 1-.75-.75ZM9.5 9h5v7a2 2 0 1 0 4 0V9H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1.5v7a2 2 0 1 0 4 0V9Zm0-5.25V9h-4V3.75H5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeDouble);
export default ForwardRef;
