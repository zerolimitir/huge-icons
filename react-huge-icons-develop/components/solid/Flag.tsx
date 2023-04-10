import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlag = (
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
            d='M3.75 2a.75.75 0 0 1 .75.75V3H15a2 2 0 0 1 2 2v7.75c0 .69-.56 1.25-1.25 1.25H4.5v7.25a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 3.75 2ZM7 16v-.5h8.75a2.75 2.75 0 0 0 2.75-2.75V7h.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
