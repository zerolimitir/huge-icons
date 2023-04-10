import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProtractorCircle = (
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
            d='M5.48 4.419a9.957 9.957 0 0 1 5.77-2.391V3a.75.75 0 0 0 1.5 0v-.972a9.957 9.957 0 0 1 5.771 2.39l-.687.688a.75.75 0 1 0 1.06 1.06l.688-.687a9.956 9.956 0 0 1 2.39 5.771H21a.75.75 0 0 0 0 1.5h.972a9.957 9.957 0 0 1-2.39 5.771l-.688-.687a.75.75 0 0 0-1.06 1.06l.687.688a9.957 9.957 0 0 1-5.77 2.39V21a.75.75 0 0 0-1.5 0v.972a9.956 9.956 0 0 1-5.772-2.39l.687-.688a.75.75 0 0 0-1.06-1.06l-.687.687a9.957 9.957 0 0 1-2.391-5.77H3a.75.75 0 0 0 0-1.5h-.972a9.957 9.957 0 0 1 2.39-5.772l.688.687a.75.75 0 0 0 1.06-1.06l-.687-.687ZM12 6a6.002 6.002 0 0 1 5.659 4H6.34C7.165 7.67 9.388 6 12 6Zm0 12a6.002 6.002 0 0 1-5.659-4H17.66A6.002 6.002 0 0 1 12 18Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProtractorCircle);
export default ForwardRef;
