import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgParagraph = (
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
            d='M9 6.75a2.25 2.25 0 0 0 0 4.5h.25v-4.5H9Zm1.75 0V18a.75.75 0 0 1-1.5 0v-5.25H9a3.75 3.75 0 1 1 0-7.5h9a.75.75 0 0 1 0 1.5h-3.25V18a.75.75 0 0 1-1.5 0V6.75h-2.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgParagraph);
export default ForwardRef;
