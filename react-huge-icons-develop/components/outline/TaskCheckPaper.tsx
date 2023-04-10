import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTaskCheckPaper = (
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
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l4.656 4.656A4 4 0 0 1 21 10.657V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14 2v3a4 4 0 0 0 4 4h3'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m9 14 1.753 1.402a1 1 0 0 0 1.377-.122L15 12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTaskCheckPaper);
export default ForwardRef;
