import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangularHollow = (
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
            d='M2.704 12.54a.513.513 0 0 0-.704.47v5.365a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V13.01c0-.36-.37-.603-.704-.47a25.239 25.239 0 0 1-4.792 1.369c-.705.128-1.216.733-1.544 1.369a3 3 0 0 1-2.667 1.624h-.586a3 3 0 0 1-2.667-1.624c-.329-.636-.84-1.241-1.544-1.37a25.23 25.23 0 0 1-4.792-1.368Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18 6.375H6a4 4 0 0 0-4 4c0 .217.107.418.295.528.848.495 3.472 1.866 7.203 2.33v.456a2 2 0 0 0 2 2h1.004a2 2 0 0 0 2-2v-.457c3.73-.463 6.355-1.834 7.203-2.33a.604.604 0 0 0 .295-.527 4 4 0 0 0-4-4Zm-6.925 6.094a.2.2 0 0 0-.2.2v.99a.8.8 0 0 0 .8.8h.65a.8.8 0 0 0 .8-.8v-.99a.2.2 0 0 0-.2-.2h-1.85Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11 3.125a2.25 2.25 0 0 0-2.25 2.25v1a.75.75 0 0 1-1.5 0v-1A3.75 3.75 0 0 1 11 1.625h2a3.75 3.75 0 0 1 3.75 3.75v1a.75.75 0 0 1-1.5 0v-1A2.25 2.25 0 0 0 13 3.125h-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularHollow);
export default ForwardRef;
