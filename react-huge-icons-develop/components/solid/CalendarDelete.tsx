import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalendarDelete = (
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
            d='M8.75 2a.75.75 0 0 0-1.5 0v1.5H7a4 4 0 0 0-4 4v.75h18V7.5a4 4 0 0 0-4-4h-.25V2a.75.75 0 0 0-1.5 0v1.5h-6.5V2ZM21 9.75H3V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9.75Zm-10.591 2.598a.75.75 0 1 0-1.06 1.061L10.938 15l-1.59 1.591a.75.75 0 1 0 1.06 1.06L12 16.062l1.591 1.59a.75.75 0 0 0 1.06-1.06L13.062 15l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 13.938l-1.591-1.59Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalendarDelete);
export default ForwardRef;
