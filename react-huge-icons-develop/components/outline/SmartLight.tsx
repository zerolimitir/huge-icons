import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartLight = (
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
            d='M15.712 4.288a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 0 0 10.41 6.41L9.35 5.35Zm-2.12-2.121a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.363 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-7.94 6.62-.656-.364.656.364Zm12.698 0 .656-.364-.656.364Zm-2.222-4-.655.364.655-.364Zm-8.254 0 .656.364-.656-.364ZM12.75 16a.75.75 0 0 0-1.5 0h1.5ZM15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3-18.5a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.59 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.287 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06a3.74 3.74 0 0 0-2.65-1.099v1.5Zm-2.379 3h4.758v-1.5H9.62v1.5Zm5.85.643 2.223 4 1.311-.729-2.222-4-1.312.729Zm1.13 5.857H7.4v1.5h9.202v-1.5ZM6.306 13.393l2.223-4-1.312-.729-2.222 4 1.311.729ZM7.4 15.25a1.25 1.25 0 0 1-1.093-1.857l-1.31-.729c-1.02 1.833.306 4.086 2.403 4.086v-1.5Zm10.295-1.857A1.25 1.25 0 0 1 16.6 15.25v1.5c2.097 0 3.422-2.253 2.404-4.085l-1.311.728ZM14.379 8.75c.454 0 .872.246 1.093.643l1.31-.729A2.75 2.75 0 0 0 14.38 7.25v1.5ZM9.62 7.25a2.75 2.75 0 0 0-2.404 1.414l1.312.729A1.25 1.25 0 0 1 9.62 8.75v-1.5ZM11.25 16v6h1.5v-6h-1.5Zm.75 6.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLight);
export default ForwardRef;
