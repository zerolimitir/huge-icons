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
            d='M20 9H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M14.5 3h4v13a2 2 0 1 1-4 0V3Z' opacity={0.4} />
        <path fill='currentColor' d='M14.5 9h4v7a2 2 0 1 1-4 0V9Z' />
        <path fill='currentColor' d='M5.5 3h4v13a2 2 0 1 1-4 0V3Z' opacity={0.4} />
        <path fill='currentColor' d='M5.5 9h4v7a2 2 0 1 1-4 0V9Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.25 3a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm-9 0A.75.75 0 0 1 5 2.25h5a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeDouble);
export default ForwardRef;
